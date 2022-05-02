import * as React from 'react';
import {Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table,Select,MenuItem} from '@mui/material'
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from "@mui/material"
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {updateTicket ,deletTicket} from '../Store/TicketActions/TicketActions'
import AuthenticationService from '../services/AuthenticationService';

const useStyles = makeStyles({});
const TableHeaderCell = withStyles((theme) => ({
  root: {
    fontWeight:"bold",
  }
}))(TableCell);


export default function BasicTable(props) {
  const dispatch=useDispatch();
  const classes = useStyles();
  const {firstname,lastname,email}=props.user;

  const [open, setOpen] = React.useState(false);//for dilog open close
  const [nweDesc,setNewdesc]=useState("");//for update desc
  const [newUpdateTicket,setNewupdateTicket] = useState("");//for get specific ticket
  const {_id,desc} =newUpdateTicket;

  const [searchItem,setSearchItem]=useState("");//for serching name
  const [serchField,setSerchField]=useState("Uname");//state for dropdown

  //state for pagnation
  const [currentItems,setCurrentItems]=useState();
  const [pageCount,setPageCount]=useState(0);
  const [iteamOffset,setIteamOffset]=useState(0);
 

  const isDel=true;
  
  //for current date
  const date=new Date();
  const D=date.getDate();
  const M=1+date.getMonth();
  const Y=date.getFullYear();
  const time=date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const Day=D.toString()+"/"+M.toString()+"/"+Y.toString()+"  "+time.toString();
  
  //for get all tickets
  const tickets = useSelector((tickets)=>tickets.Ticket)
  
  useEffect(()=>{
      //pagnation
      const endOffset = iteamOffset + 10;
      if(searchItem===""){
        setCurrentItems(tickets.slice(iteamOffset, endOffset));
        setPageCount(Math.ceil(tickets.length / 10));
      }
      else{
        const data= tickets.filter((ticket)=>{
            if(searchItem===""){
               return ticket
              }else if( ticket[serchField].toLowerCase().includes(searchItem.toLocaleLowerCase())){
                  return ticket
              }
          }
        )
        setCurrentItems(data.slice(iteamOffset, endOffset))
        setPageCount(Math.ceil(data.length / 10));
      }
  },[iteamOffset,tickets,searchItem]);
  
 //update form code
  const handleClickOpen = async (_id) => {
    const {data} = await AuthenticationService.getTicket1(_id);
    setNewupdateTicket(data)
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

 const updateticket= (_id)=>{
  if(nweDesc===desc || nweDesc===""){ alert("Ticket Not Updated")}
  else{dispatch(updateTicket(_id,Day,nweDesc)) 
  setNewdesc("")}
  setOpen(false);
}

  const deleteticket=(_id)=>{
    dispatch(deletTicket(_id,Day,isDel))

  }

  //for pagnation code
  const handlePageClick=(event)=>{
      const newOffset =(event.selected*10)%tickets.length;
      setIteamOffset(newOffset);
  };
  
  return (
    <>
    <div align="center">
      <Select 
          id="field" 
          value={serchField} 
          label="select"
          onChange={(e)=>{setSerchField(e.target.value);setSearchItem("")}}
          sx={{width:"10%", backgroundColor:"ActiveBorder"}}
      >
        <MenuItem value="Uname">Name</MenuItem>
        <MenuItem value="desc">Description</MenuItem>
        <MenuItem value="CreatedDate">Create at</MenuItem>
        <MenuItem value="UpdateDate">Update at</MenuItem>
        <MenuItem value="DeleteDate">Delete at</MenuItem>
      </Select>
      <TextField 
        sx={{marginLeft:"20px",width:"25%",backgroundColor:"ActiveBorder"}}
        id="outlined-basic" 
        placeholder="Search Heare" 
        variant="outlined" 
        value={searchItem}
        onChange={(e)=>{setSearchItem(e.target.value)}} 
      />
    </div>
      <hr/>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.table}>
          <TableHead sx={{backgroundColor:"#4B7BE5" }}>
            <TableRow>
              <TableHeaderCell >Ticket No</TableHeaderCell>
              <TableHeaderCell >Ticket Desc</TableHeaderCell>
              <TableHeaderCell align="center">Creator Name</TableHeaderCell>
              <TableHeaderCell align="center">Created at</TableHeaderCell>
              <TableHeaderCell align="center">Updated at</TableHeaderCell>
              <TableHeaderCell align="center">Deleted at</TableHeaderCell>
              <TableHeaderCell align="left">Update</TableHeaderCell>
              <TableHeaderCell align="left">Delete</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems
            ?.map((ticket,index) => (
              <TableRow key={ticket._id} style={{backgroundColor: ticket.isDelete ? '#a3cfbb' : '#DBDBDB'}} >
                <TableCell component="th"> {index+1}</TableCell>
                <TableCell component="th"> {ticket.desc}</TableCell>
                <TableCell align="center">{ticket.Uname}</TableCell>
                <TableCell align="center">{ticket.CreatedDate}</TableCell>
                <TableCell align="center">{ticket.UpdateDate}</TableCell>
                <TableCell align="center">{ticket.DeleteDate}</TableCell>
                <TableCell align="center"><button disabled={ticket.isDelete} type="button" className="btn btn-info" onClick={()=>{handleClickOpen(ticket._id)}} style={{display:ticket.Email===email?"block":"none" }}><EditOutlinedIcon/>Update</button></TableCell>
                <TableCell align="center"><button disabled={ticket.isDelete} type="button" className="btn btn-danger" onClick={()=>{deleteticket(ticket._id)}}  style={{display:ticket.Email===email?"block":"none"}}><DeleteForeverIcon/>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>

      {/* for update ticket */}
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Ticket</DialogTitle>
      <DialogContent>

          <TextField
              hidden
              defaultValue={_id}
          />

          <TextField
              disabled
              id="outlined-disabled"
              label="User Name"
              defaultValue={firstname+" "+lastname}
              sx={{
                marginBottom:"10px",
                marginTop:"20px"
              }}
          />
          <TextField
              disabled
              id="outlined-disabled"
              label="Update Date"
              defaultValue={Day}
              sx={{
                marginTop:"20px",
                marginLeft:"55px"
              }}
          />

          <TextField
              required
              autoFocus
              margin="dense"
              id="Desc"
              label="Enter Decrepitation"
              fullWidth
              variant="standard"
              defaultValue={desc}
              onChange={(e)=>setNewdesc(e.target.value)}
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={()=>{updateticket(_id)}}>Update</Button>
      </DialogActions>
      </Dialog>
      <br/>
      <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        renderOnZeroPageCount={null}
        
      />
    </>
  );
}

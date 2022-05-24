import * as React from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import { createTicket } from '../Store/TicketActions/TicketActions';
import { useDispatch } from 'react-redux'
import { Box } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function FormDialog(props) {
  const dispatch=useDispatch();
  const [open, setOpen] = React.useState(false);
  const [Desc,setDesc]=React.useState("")
  const {firstname,lastname,email}=props.user;
  const name=firstname+" "+lastname;
  const Email=email;
  
  //for current date
  const date=new Date();
  const D=date.getDate();
  const M=1+date.getMonth();
  const Y=date.getFullYear();
  const time=date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const Day=D.toString()+"/"+M.toString()+"/"+Y.toString()+"  "+time.toString();
  
  const handleClickOpen = () => {
    setOpen(true);
    console.log()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(!Desc.Desc===""){
      dispatch(createTicket(name,Day,Email,Desc.Desc))
      .then(response=>{ 
      setOpen(false);})
    }else{
      alert("Please Enter A Ticket Description");
    }
  };

  return (
    <div>
      <Box textAlign="center" >
        <Button 
            variant="contained" 
            color="success" 
            onClick={handleClickOpen}
            sx={{fontSize:"20px"}}
        >
          <AddCircleOutlineIcon sx={{marginRight:"10px"}}/>Add Ticket
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Ticket</DialogTitle>
        <DialogContent>

          <TextField
            hidden
            defaultValue={email}
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
            label="Date"
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
            onChange={(e)=>setDesc({Desc:e.target.value})}
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
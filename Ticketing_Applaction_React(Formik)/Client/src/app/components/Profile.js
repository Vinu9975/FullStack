import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap";
import AppNavbar from './AppNavbar';
import AuthenticationService from '../services/AuthenticationService';
import FormDialog from './AddTicket.js'
import {getTicket} from '../Store/TicketActions/TicketActions';
import {connect} from 'react-redux';
import BasicTable from './TicketList.js'
import BasicTable1 from './singalSearch'

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {user: undefined};
    this.state={ticket:undefined};
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({user: user});
    this.props.getTicket();
  }

  render() {
    let userInfo = "";
    const user = this.state.user;
    // login
    if (user && user.accessToken) {
      userInfo = (
        <div >
          <Alert >
              <FormDialog  user={user}/>
              <hr></hr>
              {/* component for single searchbarr */}
              {/* <BasicTable1 user={user}/> */}
              
              <BasicTable user={user}/>   
          </Alert>
        </div>
      );}
      else { 
        // not login
        userInfo =<div >
                    <Alert variant="primary">
                      <h5>Login For Add Ticket</h5>
                      <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
                    </Alert>
                  </div>
    }

  return (
    <div style={{margin:"0"}} id="profileDiv">
      <AppNavbar/>
      <Container fluid>
        {userInfo}
      </Container>
    </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ticket:state.tickets,
  }
}

export default connect(mapStateToProps,{getTicket}) (Profile);
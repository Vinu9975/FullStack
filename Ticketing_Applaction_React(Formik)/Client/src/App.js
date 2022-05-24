import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './app/components/Home';
import Profile from './app/components/Profile';
import AddTicket from './app/components/AddTicket.js';
import LoginFormik from './app/components/LoginFormik';
import SignUpFormik from './app/components/SignUpFormik';
import ForgotPassword from './app/components/ForgotPassword';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/signin' exact={true} component={LoginFormik}/>
          <Route path='/signup' exact={true} component={SignUpFormik}/>  
          <Route path='/AddTicket' exact={true} component={AddTicket}/>
          <Route path='/forgotPass'  exact={true} component={ForgotPassword}/>
        </Switch>
      </Router>
      
    )
  }
}

export default App;
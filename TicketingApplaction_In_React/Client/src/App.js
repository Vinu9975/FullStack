import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './app/components/Home';
import Profile from './app/components/Profile';
import SignUp from './app/components/SignUp';
import Login from './app/components/Login';
import AddTicket from './app/components/AddTicket.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/signin' exact={true} component={Login}/>
          <Route path='/signup' exact={true} component={SignUp}/>  
          <Route path='/AddTicket' exact={true} component={AddTicket}/>  
        </Switch>
      </Router>
    )
  }
}

export default App;
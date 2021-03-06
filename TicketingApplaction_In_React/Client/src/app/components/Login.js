import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from "../services/AuthenticationService";



class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();
    AuthenticationService.signin(this.state.username, this.state.password)
    .then(() => {
          this.props.history.push('/profile');
        },
        error => {
          this.setState({error: "Can not signin successfully ! Please check username/password again"});
        }
    );
  }

  render() {
    return ( 
      <div id="loginDiv">
        <AppNavbar/>
        <Container fluid style={{marginTop:"20vh"}}>
          <Row style={{marginTop:"230px"}}>
            <Col id='Container' sm="12" md={{ size: 4, offset: 4 }}>
              <Form  onSubmit={this.doLogin} style={{width:"420px" , marginLeft:"30px"}}>
                <FormGroup>
                  <Label for="username"><strong>Username</strong></Label>
                  <Input autoFocus required
                    type="text"
                    name="username" id="username"
                    value={this.state.username}
                    placeholder="Enter Username"
                    autoComplete="username"
                    onChange={this.changeHandler}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="password"><strong>Password</strong></Label>
                  <Input type="password" required
                    name="password" id="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    autoComplete="password"
                    onChange={this.changeHandler}
                  />
                </FormGroup>

                <Button type="submit"  size="lg" style={{marginBottom:"15px",marginTop:"50px"}} block>
                  Log In
                </Button>
                {
                  this.state.error && (
                    <Alert color="danger">
                      {this.state.error}
                    </Alert>
                  )
                }
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
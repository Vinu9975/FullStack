import React from 'react';
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'
import * as Yup from 'yup'
import {Button} from 'react-bootstrap';
import './css/login.css'
import AuthenticationService from "../services/AuthenticationService";
import ErrorRed from './Error';
import AppNavbar from './AppNavbar';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

const initialValues={
    username:'',
    password:''
}
const validationSchema=Yup.object({
    username:Yup.string().required('Requried!!!'),
    password:Yup.string().required('Requried!!!'),
})


export default function LoginFormik(props) {
  const [Login,setLogin]=useState("0");

  const onSubmit=async (value)=>{
    AuthenticationService.signin(value.username, value.password)
    .then(() => {
      window.location ='/profile'
    },
    error => {
      setLogin("1")
      console.log('not login')
    }
  );
  }

  return (
    <div className='Main'>
    
    <AppNavbar/>
    <div className='login'>
      <div className='login-ch'>
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form>
                <div >
                  <div className='form-ctrl'>
                      <label htmlFor='username'>User Name</label>
                      <Field  type="text"
                              id="username"
                              name="username"
                              className="loginInput"/>

                        <ErrorMessage name='username' component={ErrorRed}/>
                  </div>
                  <div className='form-ctrl'>
                      <label htmlFor='password'>Password</label>
                      <Field  type="password"
                              id="password"
                              name="password"
                              className="loginInput"/>
                      <ErrorMessage name='password' component={ErrorRed}/>
                  </div>

                  <Button type="submit"   style={{marginBottom:"15px"}} block>
                  Log In
                  </Button>
                   {
                     Login==="1" && (
                      <Alert className='alertlogin' color="danger">
                        {"Can not signin successfully ! Please check username/password again"}
                      </Alert>
                    )
                  }
                  
                </div>
                
            </Form>
        </Formik>
      </div>
    </div>
    </div>
    
  )
}

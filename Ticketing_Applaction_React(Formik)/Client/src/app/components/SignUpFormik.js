import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import AuthenticationService from "../services/AuthenticationService";
import {Button} from 'react-bootstrap';
import ErrorRed from './Error';
import AppNavbar from './AppNavbar';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import './css/SignUp.css'





const initialValues={
    fname:'',
    lname:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:''

}
const validationSchema=Yup.object({
    fname:Yup.string().required('First Name Requried!!!')
              .min(3,"First Name must be Greter than 3 Charecter")
              .matches((/^[a-zA-Z ]+$/),"First Name Must be only Charecter"),
    lname:Yup.string().required('Last Name Requried!!!')
              .min(3,"Last Name must be Greter than 3 Charecter")
              .matches((/^[a-zA-Z ]+$/),"Last Name Must be only Charecter"),
    username:Yup.string().required('User Name Requried!!!')
                .min(3,"First Name must be Greter than 3 Charecter"),
    email:Yup.string().email('Invalide email Formate').required('Email Requried!!!'),
    password:Yup.string().required('Password Requried!!!')
                .matches(("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"),"Minimum 5 characters, Include 1 letter 1 number & 1 special character:"),
    confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
})

export default function SignUpFormik() {
  const [SignUp,setSignUp]=useState("0")
  const onSubmit=async (value)=>{
    AuthenticationService.register(
        value.fname,
        value.lname,
        value.username,
        value.email,
        value.password
    ).then(() => {
      window.location ='/signIn'
   },
   error => {
    setSignUp("1")
   }
 );
}
  return (
    <div className='MainS'>
    <AppNavbar/>
    <div className='SignUp'>
        <div className='SignUp-ch'>
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form>
                <div className='form-ctrl'>
                    <label htmlFor='fname'>First Name</label>
                    < Field type="text" 
                            id="fname" 
                            name="fname"
                            className="loginInput"
                            />
                    <ErrorMessage name='fname' component={ErrorRed}/>
                </div>

                <div className='form-ctrl'>
                    <label htmlFor='lname'>Last Name</label>
                    < Field type="text" 
                            id="lname" 
                            name="lname"
                            className="loginInput"
                            />
                    <ErrorMessage name='lname' component={ErrorRed}/>
                </div>

                <div className='form-ctrl'>
                      <label htmlFor='username'>User Name</label>
                      <Field  type="text"
                              id="username"
                              name="username"
                              className="loginInput"/>

                    <ErrorMessage name='username' component={ErrorRed}/>
                </div>

                <div className='form-ctrl'>
                      <label htmlFor='email'>Email</label>
                      <Field  type="text"
                              id="email"
                              name="email"
                              className="loginInput"/>

                    <ErrorMessage name='email' component={ErrorRed}/>
                </div>

                <div className='form-ctrl'>
                      <label htmlFor='password'>Password</label>
                      <Field  type="password"
                              id="password"
                              name="password"
                              className="loginInput"/>
                      <ErrorMessage name='password' component={ErrorRed}/>
                </div>

                <div className='form-ctrl'>
                      <label htmlFor='confirmPassword'>Confirm Password</label>
                      <Field  type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              className="loginInput"/>
                      <ErrorMessage name='confirmPassword' component={ErrorRed}/>
                </div>

                <Button type="submit" style={{ marginBottom:"10px"}}>
                  Create Account
                </Button>
                <Button type="reset"   style={{marginLeft:"15px" , marginBottom:"10px"}} >
                Reset
                </Button>
                {
                     SignUp==="1" && (
                      <Alert className='alertSign' color="danger">
                        {"Email Alredy Exist"}
                      </Alert>
                    )
                  }
                

            </Form>
        </Formik>
        </div>
    </div>
    </div>
  )
}

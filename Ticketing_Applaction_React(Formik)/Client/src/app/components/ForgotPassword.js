import React from 'react'
import AppNavbar from './AppNavbar'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import ErrorRed from './Error';
import './css/forgotPass.css'

const initialValues={
    email:'',
    resetLink:""
}

const validationSchema=Yup.object({
    email:Yup.string().email('Invalide email Formate').required('Email Requried!!!'),
})

const onSubmit=(values)=>{
    console.log(values)
}

export default function ForgotPassword() {
  return (
    <div className='Main'>
        <AppNavbar></AppNavbar>
        <div className='forgot'>
            <div className='forgot-ch'>
                <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                    <Form>
                        <div className='heading'>Forgot Password</div>
                        <div>
                        <div className='form-ctrl'>
                                <label className='labelForgot' htmlFor='email'>Enter Your Email</label>
                                <Field  type="text"
                                        id="email"
                                        name="email"
                                        className="loginInputForgot"/>

                                <ErrorMessage name='email' component={ErrorRed}/>
                            </div>

                            <div className='btnforgot'>
                                <Button type="submit" variant="success" >
                                    get Link
                                </Button>

                                <Link to="signin">
                                <Button variant="danger">Cancle</Button>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
  )
}

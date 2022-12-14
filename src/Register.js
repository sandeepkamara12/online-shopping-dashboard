import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Layout from './Layout/Layout';

const Register = () => {
    const navigate = useNavigate();
    let [message, setMessage] = useState({});

    const initialValues = {
        name: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(4).max(20).required("User name is required!"),
        email: Yup.string().email().required("Email is required!"),
        password: Yup.string().required("Password is required!").min(8, "Password must be 8 charachters long").matches(/[0-9]/, 'Password requires a number').matches(/[a-z]/, 'Password requires a lowercase letter').matches(/[A-Z]/, 'Password requires an uppercase letter').matches(/[^\w]/, 'Password requires a symbol')
    });

    const onSubmit = async values => {
        let result = await fetch("https://splitwith-server.vercel.app/api/v1/auth/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(values)
        })
        result = await result.json();
        setMessage(result);
        result.success && navigate('/otp', { state: result });
    };

    // useEffect(() => {
    //     localStorage.getItem('user-register-info') && navigate('/register');
    // }, [])
    return (
        <Layout>
            <div className="min-vh-100 w-100 bg-primary d-flex flex-wrap align-items-center">
                <div className="container-sm d-flex flex-wrap align-items-center justify-content-between flex-column text-center !px-6 py-5 text-white-tone">
                    <div className="w-100 d-flex flex-wrap align-items-center flex-column">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-16 h-16 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <h1 className="text-xl">Sign up</h1>
                        <p className="mb-4 text-sm">Mobile task and meeting schedule manage design template</p>
                        <p className="text-danger text-left">{message.errMsg}</p>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {
                                formik => {
                                    return (
                                        <Form className="w-100 text-left">
                                            <Field name="name">
                                                {
                                                    ({ field }) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control w-100" id="name" {...field} onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name} placeholder="Enter the Name" />
                                                                    <ErrorMessage name="name" component="div" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                }
                                            </Field>
                                            <Field name="email">
                                                {
                                                    ({ field }) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control w-100" id="email" {...field} onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.email} placeholder="Enter the Email" />

                                                                </div>
                                                                <ErrorMessage name="email" component="div" />
                                                            </>
                                                        )
                                                    }
                                                }
                                            </Field>
                                            <Field name="password">
                                                {
                                                    ({ field }) => {
                                                        return (
                                                            <>
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control w-100" id="password" {...field} placeholder="Enter the password" />
                                                                </div>
                                                                <ErrorMessage name="password" component="div" />
                                                            </>
                                                        )
                                                    }
                                                }
                                            </Field>
                                            <Button type="submit" className="btn bg-white text-primary text-uppercase rounded w-100 fw-bold mb-4 py-2">Sign up</Button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        <span className="text-sm">Already have an account?</span>
                        <Link to="/login" className="text-white text-decoration-none text-capitalize font-medium mt-2">Sign in</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register
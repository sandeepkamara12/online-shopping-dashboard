import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from './Layout/Layout';
import Loader from './components/Loader';
const Login = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Email is required!"),
        password: Yup.string().min(8, "Password must 8 characters long.").matches(/[A-Z]/, "Uppercase letter required!").matches(/[a-z]/, "lowercase letters required!").matches(/[0-9]/, "digits are required!").matches(/[^\w]/, "special symobls are required!")
    });

    const onSubmit = async (values) => {
        console.log(values);
        // let data = { values };
        // let result = await fetch("url", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
        // result = await result.json();
        // console.log(result);
        localStorage.setItem("login-data", JSON.stringify(values));
    }

    return (
        <Layout>
        <div className="min-vh-100 w-100 bg-primary d-flex flex-wrap align-items-center">
            <div className="container-sm d-flex flex-wrap align-items-center justify-content-between flex-column text-center !px-6 py-5 text-white-tone">
                <div className="w-100 d-flex flex-wrap align-items-center flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-16 h-16 m-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <h1 className="text-xl">Sign in</h1>
                    <p className="mb-4 text-sm">Mobile task and meeting schedule manage design template</p>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {
                            formik => {
                                return (
                                        <Form className="w-100">
                                        <Field name="email">
                                                {
                                                    props => {
                                                        return (
                                                            <div className="mb-3">
                                                                <input type="email" className="form-control w-100" id="email" placeholder="Enter the email" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.email} />
                                                                <ErrorMessage name="email" component="div" />
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Field>
                                            <Field name="password">
                                                {
                                                    props => {
                                                        return (
                                                            <div className="mb-3">
                                                                <input type="text" className="form-control w-100" id="password" placeholder="Enter the password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                                                <ErrorMessage name="password" component="div" />
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Field>
                                        <Button type="submit" className="btn bg-white text-primary text-uppercase rounded w-100 fw-bold mb-4 py-2" onClick={onSubmit}>Sign in</Button>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                    <span className="text-sm">Don't you have an account?</span>
                    <Link to="/register" className="text-white text-decoration-none text-capitalize font-medium mt-2">Sign up</Link>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Login
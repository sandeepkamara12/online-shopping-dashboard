import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
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
        // let result = await fetch("https://splitwith-server.vercel.app/api/v1/auth/ragister", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //     },
        //     body: JSON.stringify(values)
        // })
        // result = await result.json();
        // console.warn(result);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Form>
                            <Field name="name">
                                {
                                    ({ field }) => {
                                        return (
                                            <>
                                                <div className="form-control">
                                                    <label>Name</label>
                                                    <input type="text" id="name" {...field} onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name} placeholder="Enter the Name" />
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
                                                <div className="form-control">
                                                    <label>Email</label>
                                                    <input type="text" id="email" {...field} onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.email} placeholder="Enter the Email" />

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
                                                <div className="form-control">
                                                    <label>Password</label>
                                                    <input type="text" id="password" {...field} placeholder="Enter the password" />
                                                </div>
                                                <ErrorMessage name="password" component="div" />
                                            </>
                                        )
                                    }
                                }
                            </Field>
                            <button type="submit">submit</button>
                        </Form>
                    );
                }
            }
        </Formik>
    )
}

export default Register
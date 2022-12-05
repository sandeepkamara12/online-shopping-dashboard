import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Splash = () => {
    return (
        <div className="h-100 w-100 bg-primary">
            <div className="container-sm d-flex flex-wrap align-items-center justify-content-between flex-column h-100 text-center !px-6 py-5 text-white-tone">
                <div className="">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div className="w-100 d-flex flex-wrap align-items-center flex-column">
                    <h1 className="text-xl">Welcome to Shopping Dashboard</h1>
                    <p className="mb-0 text-sm">Mobile task and meeting schedule manage design template</p>
                    <Button className="btn bg-white text-primary text-uppercase rounded w-100 fw-bold my-4 py-2">Sign Up</Button>
                    <span>Already a member?</span>
                    <Link to="/login" className="text-white text-decoration-none text-capitalize font-medium mt-2">Sign in</Link>
                </div>
            </div>
        </div>
    )
}                                   

export default Splash;
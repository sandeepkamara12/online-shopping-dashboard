import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/register')
    }

    const user = JSON.parse(localStorage.getItem('user-register-info'));
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        localStorage.getItem('user-register-info') ?
                            <>
                                <Link className="nav-link" to="/add">Add Product</Link>
                                <Link className="nav-link" to="/update">Update Product</Link>
                                <Link className="nav-link" onClick={handleLogout}>{user && user.name} Logout</Link>
                            </>
                            :
                            <>
                                <Link className="nav-link" to="/otp">Otp</Link>
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
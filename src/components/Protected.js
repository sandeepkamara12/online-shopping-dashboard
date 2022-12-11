import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Protected = (props) => {
    let navigate = useNavigate();
    let Cmp = props.Cmp;
    const isLogin = localStorage.getItem('user-register-info');

    useEffect(() => {
        if (!isLogin) {
            navigate('/register');
        }
    }, [isLogin])

    return (
        <Cmp />
    )
}

export default Protected;
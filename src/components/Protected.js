import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Protected = (props) => {
    let navigate = useNavigate();
    const isLogin = localStorage.getItem('user-register-info');
    let Cmp = props.Cmp;
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        if (!isLogin) {
            navigate('/register');
        }
        setLoader(false);
    }, [isLogin, navigate]);

    return (loader ? <Loader /> : <Cmp />)
}

export default Protected;
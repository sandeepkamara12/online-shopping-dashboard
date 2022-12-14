import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
const Public = (props) => {
    let Cmp = props.Cmp;
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    let isLogin = localStorage.getItem('user-register-info');

    useEffect(() => {
        if (isLogin) { navigate('/add'); }
        setLoader(false);
    }, [isLogin, navigate])

    return (loader ? <Loader /> : <Cmp />)
}

export default Public;
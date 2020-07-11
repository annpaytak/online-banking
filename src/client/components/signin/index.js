import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {TextField} from '@material-ui/core';

import UserContext from '../../context';

const Signin = () => {
    const userService = useContext(UserContext);

    let redirectTimeout;
    // const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');//anna
    const [password, setPassword] = useState('');//12345678
    // const [loggedinSuccessfully, setloggedinSuccessfully] = useState(false);
    const [userData, setUserData] = useState(null);

   useEffect(() => {
       userService.userChange.subscribe(async userData => {
           if (!userData) return;
           console.log('in subscr')
           setUserData(userData);
       });
   });

    const handleUsername = e => { setUsername(e.target.value) };
    const handlePassword = e => { setPassword(e.target.value) };
    useEffect(() => () => { clearTimeout(redirectTimeout) });

    const loginUser = async () => {
        if(!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            password: password,
        }

        const response = await userService.signin(userData);
        console.log(response);
        setUserData(userData);
        // redirectTimeout = setTimeout(() => setRedirect(true), 5000);
        // setloggedinSuccessfully(true);
    }

    // if (redirect) return <Redirect to="/" />;
    if (userData) return (
        <div>
            <h1>Welcome to banking {userData.username}.</h1>
            <Link to="/">home</Link>
        </div>
    );
    return (
        <div>
            <form>
                <label htmlFor="">
                    ім'я
                    <TextField value={username} onChange={handleUsername} />
                </label>
                <label htmlFor="">
                    Пароль
                    <TextField value={password} type={password} onChange={handlePassword} />
                </label>

                <button type="button" onClick={loginUser}>Далі</button>
            </form>
        </div>
    );
};

export default Signin;

import React, {useContext, useState} from 'react';
import { TextField } from '@material-ui/core';

import UserContext from '../../context';

// templates
import Signin from '../signin';

const BecomeClient = (props) => {
    const userService = useContext(UserContext);
    // console.log(userService)

    const [username, setUsername] = useState('');//anna
    const [email, setEmail] = useState('');//anna@gmail.com
    const [password, setPassword] = useState('');//12345678
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
    const role = 'user';

    const handleUsername = e => {
        setUsername(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value)
    };

    const handlePassword = e => {
        setPassword(e.target.value)
    };

    const createUser = async () => {
        if(!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            email: email,
            password: password,
            roles: [role]
        };

        const response = userService.signup(userData);
        console.log(response);

        setSubmittedSuccessfully(true);
    };

     if(submittedSuccessfully) return (
        <div>
            <h1>You were successfully submitted to banking.</h1>
            <Signin />
        </div>
    );

    return (
        <section>
            <h4>Створити клієнта</h4>
            <form>
                <label htmlFor="">
                    Як до вас звертатись?
                    <TextField value={username} onChange={handleUsername} />
                </label>
                <label htmlFor="">
                    Вкажіть електронну адресу
                    <TextField value={email} onChange={handleEmail} />
                </label>
                <label htmlFor="">
                    Пароль
                    <TextField value={password} type={password} onChange={handlePassword} />
                </label>
                <button type="button" onClick={createUser}>Далі</button>
            </form>
        </section>
    );
};

export default BecomeClient;

import React from 'react';
import classes from './login.module.css';

import {Link} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className = {classes.login_holder}>
                <h1>Login</h1>
                <label for = 'email'><b>Email</b></label>
                <input className = {classes.login_input} type="email" id = 'email' placeholder ='Enter Email' />
                <label for = 'password'><b>Password</b></label>
                <input className = {classes.login_input} type="password" id = 'password' placeholder='Enter Password' />
                <button type = 'submit'>
                    <Link to = '/dashboard'>Login</Link>
                </button>
            </div>
        )
    }
}

export default Login


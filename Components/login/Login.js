import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../utils/firebase';


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo-500x333.png" alt="" />
            </div>    
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
import React, { useState,useEffect } from 'react';
import './login.css';  
import {database} from '../firebase.js';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


function Login({setIsLoggedIn,setEmail}) {
    const history = useNavigate()
    
    const goToSignUp = ()=>{

        history('/signUp')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            setIsLoggedIn(true)
            setEmail(email)
            history('/index')
        } ).catch((err)=>{
            setIsLoggedIn(false)
            alert(err)
        })
   }

    return (
       
            <div className="sign-in">
            <form className="sign-in-container" onSubmit={(e)=>handleSubmit(e)}>
                <h1>Log In</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    
                />
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    
                />
                <button className="sign-in-button" >
                    Log In
                </button>
                
                <div className="new-to-netflix">
                    <span>New to Netflix? <a href='' onClick={goToSignUp}>Sign up now.</a></span>
                </div>
               
            </form>
        </div>
        
    );
}

export default Login;

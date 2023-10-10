import React, { useRef, useState } from 'react';
import './signUp.css';
import {database} from '../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const history = useNavigate()

   const goToLogIn = ()=>{
    history('/')
   }

   const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(database,email,password).then(data=>{
            alert("SignUp successful")
            history('/')
        } ).catch((err)=>{
            alert(err)
        })
   }
    return (
        <div className="sign-up">
            <form className="sign-up-container" onSubmit={(e)=>handleSubmit(e)}>
                <h1>Sign Up</h1>
                <input
                    type="email"
                    placeholder="email"
                    name='email'
                />
                <input
                    type="password"
                    placeholder="password"
                    name='password'
                />
                {/* <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
                <button className="sign-up-button">
                    Sign Up
                </button>
                <div className="already-member">
                    <span>Already a member? <a href="" onClick={goToLogIn} >Sign in now.</a></span>
                </div>
            </form>
        </div>
    );
}

export default Signup;

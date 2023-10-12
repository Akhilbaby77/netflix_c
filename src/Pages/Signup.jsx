import React from 'react';
import './signUp.css';
import {database} from '../firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
function Signup({setUsers}) {
    const history = useNavigate()
   const goToLogIn = ()=>{
    history('/')
   }

   const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.Name.value;

        createUserWithEmailAndPassword(database,email,password,name).then(data=>{
            addDoc(collection(db, "user-details"), {
                name: name,
                email: email
              });
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
                    type="text"
                    placeholder="Name"
                    name='Name'
                />
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
                    <span>Already a member? <a href="" onClick={goToLogIn} >Log in now.</a></span>
                </div>
            </form>
        </div>
    );
}

export default Signup;

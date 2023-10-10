import React, { useState } from 'react'
import { database } from '../../firebase';
import { signOut } from 'firebase/auth';
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const history = useNavigate()
  const[state,setState] = useState(false)

  const handleClick = () => {
    signOut(database).then(val => {
      history('/')
    })
  }

  
  const dropDown = ()=>{
    if(state === false){
      setState(true)
    }else{
      setState(false)
    }
    }

  return (
    <div className="navbar">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />

      <button className="avatar" onClick={dropDown}>
        <img id='dropDown' className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </button>
      <div className={
        state === true ? 'show' : 'notShow'
      } id='signoutBtn'>
        <button className='notShowBtn' onClick={handleClick}>Sign Out</button>
      </div>

    </div>
  )
}

export default NavBar

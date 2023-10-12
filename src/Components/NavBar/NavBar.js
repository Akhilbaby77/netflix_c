import React, { useEffect, useState } from 'react'
import { database } from '../../firebase';
import { signOut } from 'firebase/auth';
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faUserPen } from '@fortawesome/free-solid-svg-icons'
import {db} from '../../firebase'
import {collection,getDocs,updateDoc,doc} from 'firebase/firestore'


function NavBar({setIsLoggedIn,setUsers,email}) {
  const history = useNavigate()
  const [userToPrint,setUserToPrint] = useState('')
  const[state,setState] = useState(false)
  const userCollectionRef = collection(db,"user-details")
  const [usersHome,setUsersHome] = useState([])


  console.log("email after login",email)
  console.log("userToPrint",userToPrint)

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUsersHome(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();

   
    const userName = usersHome.find((user) => user.email === email);
    console.log("userName", userName);
    setUserToPrint(userName ? userName.name : ''); 
  }, [email, userCollectionRef, usersHome]);

  const handleClick = () => {
    signOut(database).then(val => {
      setIsLoggedIn(false)
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

      <div className='avatar-grp'>
      <img id='dropDown' className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        <button className="avatar" onClick={dropDown}>  
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      </div>
        
      <div className={
        state === true ? 'show' : 'notShow'
      } id='signoutBtn'>
        <div className='nameEdit'>
        {
            <p>Hi,{userToPrint}</p>
            
        }
        {/* <button><FontAwesomeIcon className='editIcon' icon={faUserPen} /></button> */}
        </div>
        
        <button className='notShowBtn' onClick={handleClick}>Sign Out</button>
      </div>

    </div>
  )
}

export default NavBar

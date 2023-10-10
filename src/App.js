import React, { useState,useEffect } from 'react'
import Home from './Pages/Home';
import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginAnimation from './Components/LoginAnimation/LoginAnimation';
import IndexAnimation from './Components/IndexAnimation/IndexAnimation';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showIndexAnimation, setShowIndexAnimation] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the animation for a few seconds
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false); // Hide the animation after the delay
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(animationTimeout);
  }, []);

  const isAuthenticated = () => {
    return isLoggedIn; 
  };
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signUp" element={<Signup />} />
          <Route
            path="/"
            element={ 
              // isLoggedIn ? ( showAnimation ?(<LoginAnimation/>) : (<Navigate to="/index" />) ):(<Login setIsLoggedIn={setIsLoggedIn} />)
              showAnimation ? (
                <LoginAnimation/>
              ) : isLoggedIn ? (
                <Navigate to="/index" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} setShowAnimation ={setShowAnimation} />
              )
            }
          />
          <Route
            path="/index"
            element={
              isAuthenticated() ? (
               <Home setIsLoggedIn={setIsLoggedIn} showIndexAnimation={showIndexAnimation} setShowIndexAnimation={setShowIndexAnimation}/>
               ) : (
               <Navigate to="/" />)
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

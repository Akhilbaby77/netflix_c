import React, { useState } from 'react'
import Home from './Pages/Home';
import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuthenticated = () => {
    return isLoggedIn; // Replace with your authentication logic.
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signUp" element={<Signup />} />
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/index" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/index"
            element={isAuthenticated() ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react'
import Home from './Pages/Home';
import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/index' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

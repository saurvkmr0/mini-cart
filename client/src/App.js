import React from 'react';
import './style.css'; 
import Login from './pages/Login';
import RegisteredUsers from './pages/RegisteredUsers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Signup from './pages/Singup.js';


function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/users" element={<RegisteredUsers />}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

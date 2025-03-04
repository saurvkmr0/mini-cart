import React from 'react';
import '../src/style.css'; 
import Login from './pages/Login.jsx';
import RegisteredUsers from './pages/RegisteredUsers.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Signup from './pages/Singup.jsx';


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

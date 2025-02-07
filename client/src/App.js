import React from 'react';
import './style.css'; 
import Login from './pages/Login';
import RegisteredUsers from './pages/RegisteredUsers';



function App(){
  return (
    <div className="App">
      <Login />
      <RegisteredUsers />
    </div>
  );
}

export default App;

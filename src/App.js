import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import UserCard from './Components/UserCard'
import NavBar from './Components/NavBar'
import User from './Components/User'
import users from './data'

function App() {
  const [ user, setUser] = useState()

  return (
    <div className='App'>
      <Header/>
      
      <UserCard user={user}/>

      <NavBar/>
    </div>
  );
}

export default App;

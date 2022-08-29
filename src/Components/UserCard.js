import React, { useState } from 'react';
import User from './User'
import users from '../data'

//users[indexVal].name
export default function UserCard(){
  
  function nextUser(){
    if(userIndex < 24)
    setUserIndex(userIndex + 1)

  }
  
  function prevUser(){
    if(userIndex > 0){
    setUserIndex(userIndex - 1)}
  }

  const [ userIndex, setUserIndex ] = useState(0)
    
    return (
      <div>
        <User
          index={users[userIndex]}
          key={users[userIndex].key}
          name={users[userIndex].name}
          id={users[userIndex].id}
          city={users[userIndex].city}
          country={users[userIndex].country}
          employer={users[userIndex].employer}
          title={users[userIndex].title}
          favoriteMovies={users[userIndex].favoriteMovies}
        />

        <button onClick={prevUser}>Previous</button>
        <span>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </span>
        <button onClick={nextUser}>Next</button>
      </div>
    );

}

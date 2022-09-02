import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import User from './User';
import users from '../data';
import './UserCard.css';

//users[indexVal].name
export default function UserCard() {
  const [userData, setUserData] = useState(users);
  const [userIndex, setUserIndex] = useState(0);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    console.log('userData updated!');
  });

  function nextUser() {
    if (userIndex < userData.length - 1) {
      setUserIndex(userIndex + 1);
    }
  }

  function deleteUser(id) {
    console.log(id);

    if (userIndex < userData.length - 1) {
      let updatedUsers = [...userData];
      updatedUsers.splice(userIndex, 1);
      console.log(updatedUsers);
      setUserData([...updatedUsers]);
    }
  }

  function editUser({ name, city, country, employer, title, favoriteMovies }) {
    let updatedUserObj = {
      id: userIndex + 1,
      name,
      city,
      country,
      employer,
      title,
      favoriteMovies,
    };

    const newUserData = [...userData];
    newUserData.splice(userIndex, 1, updatedUserObj);
    setUserData(newUserData);
  }

  function createUser(newUser) {
    newUser.id = userData.length + 1;

    console.log(userData);
    setUserData([...userData, newUser]);
  }

  return (
    <div className='user_container'>
      <User
        key={userData[userIndex].id}
        className='user_card'
        position={userIndex + 1 + '/' + userData.length}
        name={userData[userIndex].name}
        city={userData[userIndex].city}
        country={userData[userIndex].country}
        employer={userData[userIndex].employer}
        title={userData[userIndex].title}
        favoriteMovies={userData[userIndex].favoriteMovies}
      />

      <div className='button_container'>
        <button
          onClick={() => {
            if (userIndex > 0) {
              setUserIndex(userIndex - 1);
            }
          }}
        >
          Previous
        </button>
        <button onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
        <button onClick={deleteUser}>Delete</button>
        <button onClick={() => setToggleAdd(!toggleAdd)}>New</button>
        <button onClick={nextUser}>Next</button>
      </div>
      {toggleAdd ? <UserForm onSubmit={createUser} /> : null}
      {toggleEdit ? <UserForm onSubmit={editUser} /> : null}
    </div>
  );
}

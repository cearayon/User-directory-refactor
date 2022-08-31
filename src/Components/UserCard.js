import React, { useState } from 'react';
import User from './User';
import users from '../data';
import './UserCard.css';

//users[indexVal].name
export default function UserCard() {
  let globalId = users.length;

  const [userData, setUserData] = useState(users);
  const [userIndex, setUserIndex] = useState(0);
  const [toggleAdd, setToggleAdd] = useState(false);

  const [id, setId] = useState(globalId);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [employer, setEmployer] = useState('');
  const [title, setTitle] = useState('');
  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movie3, setMovie3] = useState('');

  function nextUser() {
    if (userIndex < userData.length - 1) {
      setUserIndex(userIndex + 1);
    }
  }

  function deleteUser(id) {
    console.log(id);
    let updatedUsers = [...userData];
    updatedUsers.splice(userIndex, 1);
    console.log(updatedUsers);
    setUserData([...updatedUsers]);
  }

  function editUser() {}

  function createUser(e) {
    e.preventDefault();
    setId(id + 1);

    let userObj = {
      id: id,
      name: { first: first, last: last },
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: [movie1, movie2, movie3],
    };

    console.log(userData);
    setUserData([...userData, userObj]);
    console.log(userObj);
    // updatedUsers.push(user);
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
        <button>Edit</button>
        <button onClick={deleteUser}>Delete</button>
        <button onClick={() => setToggleAdd(!toggleAdd)}>New</button>
        <button onClick={nextUser}>Next</button>
      </div>
      {toggleAdd ? (
        <form className='addForm' onSubmit={createUser}>
          <label htmlFor='addUser'></label>
          <input
            onChange={(e) => setFirst(e.target.value)}
            autoFocus
            id='firstInput'
            type='text'
            placeholder='First Name'
            required
          />
          <input
            autoFocus
            onChange={(e) => setLast(e.target.value)}
            id='lastInput'
            type='text'
            placeholder='Last Name'
            required
          />
          <input
            autoFocus
            onChange={(e) => setCity(e.target.value)}
            id='cityInput'
            type='text'
            placeholder='City'
            required
          />
          <input
            autoFocus
            onChange={(e) => setCountry(e.target.value)}
            id='countryInput'
            type='text'
            placeholder='Country'
            required
          />
          <input
            autoFocus
            onChange={(e) => setEmployer(e.target.value)}
            id='employerNameInput'
            type='text'
            placeholder='Employer'
            required
          />
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            id='titleInput'
            type='text'
            placeholder='Title'
            required
          />
          <input
            autoFocus
            onChange={(e) => setMovie1(e.target.value)}
            id='movie1Input'
            type='text'
            placeholder='Movie 1'
            required
          />
          <input
            autoFocus
            onChange={(e) => setMovie2(e.target.value)}
            id='movie2Input'
            type='text'
            placeholder='Movie 2'
            required
          />
          <input
            autoFocus
            onChange={(e) => setMovie3(e.target.value)}
            id='movie3Input'
            type='text'
            placeholder='Movie 3'
            required
          />

          <button> Add User</button>
        </form>
      ) : null}
    </div>
  );
}

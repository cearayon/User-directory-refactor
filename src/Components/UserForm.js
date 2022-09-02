import React, { useState, useEffect } from 'react';

export default function UserForm(props) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [employer, setEmployer] = useState('');
  const [title, setTitle] = useState('');
  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movie3, setMovie3] = useState('');

  const resetFields = () => {
    setFirst('');
    setLast('');
    setCity('');
    setCountry('');
    setEmployer('');
    setTitle('');
    setMovie1('');
    setMovie2('');
    setMovie3('');
  };

  return (
    <form className='addForm' onSubmit={props.onSubmit}>
      <label htmlFor='addUser'></label>
      <input
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        autoFocus
        id='firstInput'
        type='text'
        placeholder='First Name'
        required
      />
      <input
        value={last}
        onChange={(e) => setLast(e.target.value)}
        id='lastInput'
        type='text'
        placeholder='Last Name'
        required
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        id='cityInput'
        type='text'
        placeholder='City'
        required
      />
      <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        id='countryInput'
        type='text'
        placeholder='Country'
        required
      />
      <input
        value={employer}
        onChange={(e) => setEmployer(e.target.value)}
        id='employerNameInput'
        type='text'
        placeholder='Employer'
        required
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id='titleInput'
        type='text'
        placeholder='Title'
        required
      />
      <input
        value={movie1}
        onChange={(e) => setMovie1(e.target.value)}
        id='movie1Input'
        type='text'
        placeholder='Movie 1'
        required
      />
      <input
        value={movie2}
        onChange={(e) => setMovie2(e.target.value)}
        id='movie2Input'
        type='text'
        placeholder='Movie 2'
        required
      />
      <input
        movie={movie3}
        onChange={(e) => setMovie3(e.target.value)}
        id='movie3Input'
        type='text'
        placeholder='Movie 3'
        required
      />

      <button type='submit'>Submit</button>
      <button onClick={resetFields}>Reset</button>
    </form>
  );
}

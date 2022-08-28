import React from 'react';




export default function User(props){

    const {name, city, country, employer, title, favoriteMovies} = props
      return (
        <div>
        <h3>{`Name: ${name.first} ${name.last}`}</h3>
        <h3>{`From: ${city}, ${country}`}</h3>
        <h3>{`Job Title: ${title}`}</h3>
        <h3>{`Employer: ${employer}`}</h3>
        <ol>Favorite Movies
            <li>{favoriteMovies[0]}</li>
            <li>{favoriteMovies[1]}</li>
            <li>{favoriteMovies[2]}</li>
        </ol>

        </div>
      );
    
}
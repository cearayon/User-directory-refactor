import React from 'react';




export default function User(props){

    const {name, position, city, country, employer, title, favoriteMovies} = props
      return (
        <div>
        <span>
        <h3>{name.first} {name.last} {position} </h3>
        
        </span>
        <h3>{`From: ${city}, ${country}`}</h3>
        <h3>{`Job Title: ${title}`}</h3>
        <h3>{`Employer: ${employer}`}</h3>
        <h3>Favorite Movies</h3>
        <ol>
            <li>{favoriteMovies[0]}</li>
            <li>{favoriteMovies[1]}</li>
            <li>{favoriteMovies[2]}</li>
        </ol>

        </div>
      );
    
}
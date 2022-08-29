import React from 'react';




export default function User(props){

    const {name, position, city, country, employer, title, favoriteMovies} = props
      return (
        <div className="user_card">
        <h2 className="user_position">{position}</h2>
        <h2 className="user_full_name">{name.first} {name.last}</h2>
        <p className="user_location"><b>From:</b> {city}, {country}</p>
        <p className="user_title"><b>Job Title:</b> {title}</p>
        <p className="user_employer"><b>Employer:</b> {employer}</p>
        
        <ol className="user_movies"> <b> Favorite Movies:</b> 
            <li>{favoriteMovies[0]}</li>
            <li>{favoriteMovies[1]}</li>
            <li>{favoriteMovies[2]}</li>
        </ol>

        </div>
      );
    
}
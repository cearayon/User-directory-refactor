import React from 'react';
import './User.css'
import UserForm from './UserForm'



export default function User(props){

    const {name, position, city, country, employer, title, favoriteMovies} = props
      return (
        
        <div className="user_info">
        <div className="user_position_box">
        <h2 className="user_position">{position}</h2>
        </div>  
        <h2 className="user_full_name">{name.first} {name.last}</h2>
        <p className="user_location"><b>From:</b> {city}, {country}</p>
        <p className="user_title"><b>Job Title:</b> {title}</p>
        <p className="user_employer"><b>Employer:</b> {employer}</p>
        <p><b> Favorite Movies:</b> </p>
        <ol>
            <li>{favoriteMovies[0]}</li>
            <li>{favoriteMovies[1]}</li>
            <li>{favoriteMovies[2]}</li>
        </ol>

        </div>
      );
    
}
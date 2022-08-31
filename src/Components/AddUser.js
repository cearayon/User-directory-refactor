import React from 'react';

export default function AddUser(){

    return (
        <form className="addForm">
            <label htmlFor="addUser"></label>
            <input 
            autoFocus
            id="addUser"
            type="text"
            placeholder="Add User"
            required
            />
            <button
            type='submit'
            aria-label='Add User'
            >
                
            </button>


        </form>
    )


}
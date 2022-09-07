import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from "./SignupForm";
import axios from 'axios';

const Signup = () =>{

    const signup = (details) => {
        const {name, username, password} = details;
        console.log('here are details',details);
        //see if username and password combo are in the database
        //if(axios.get('/username') ?)
        // axios.post('/signup', {
        //     name: name,
        //     username: username,
        //     password: password
        // });
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
              'Content-Type': 'application/json',
            }
        })
        
    };

    return (

        <div>
            <Link to ='/'>
                <button className = "back">Back</button>
            </Link>
            <SignupForm signup = {signup} />

        </div>
    );
}

export default Signup;
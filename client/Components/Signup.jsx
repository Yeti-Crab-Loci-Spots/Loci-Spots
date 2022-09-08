import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from "./SignupForm";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Signup = () =>{

    const[signupForm, setSignupForm ] = useState(false);

    const signup = (details) => {
        const {name, username, password} = details;
        console.log('here are details',details);

        if(name && username && password){
            fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                  'Content-Type': 'application/json',
                }
            })
            setSignupForm(true);
        }
        
        
    };

    return (

        <div>
            <Link to ='/'>
                <button className = "back">Back</button>
            </Link>
            <SignupForm signup = {signup} />
            <div>{signupForm ? <Alert severity="success">New Account Created!</Alert> :<Alert severity="warning">Invalid credentials</Alert>  }</div>
        </div>
    );
}

export default Signup;
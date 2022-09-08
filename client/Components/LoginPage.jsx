import React, {useState} from "react";
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LoginPage = () =>{

    const [user, setUser] = useState({username:'', password:''});
    const [error, setError] = useState('');

    // window.sessionStorage.setItem('isLoggedIn', false);

    const login = async (details) => {
        console.log('details in LoginPage', details);
        //see if username and password combo are in the database
        //if(axios.get('/username') ?)
        const {username, password } = details;

        console.log('USERNAME', username);
        console.log('PASSWORD', password);

        console.log('USER before setUser', user) //user is empty strings here

        setUser({
            username: username,
            password: password
        })
        
        const result = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
              'Content-Type': 'application/json',
            }
        });

        const parsedResult = await result.json();
        console.log('parsed result',parsedResult)
        if(result.status === 200){
            sessionStorage.setItem('isLoggedIn', true);
            sessionStorage.setItem('name', parsedResult);
        }
    }


    return (
        <div>
            <Link to ='/'>
                <button className = "back">Back</button>
            </Link>
            <LoginForm login = {login} error = {error} />
        </div>
    );
}

export default LoginPage;
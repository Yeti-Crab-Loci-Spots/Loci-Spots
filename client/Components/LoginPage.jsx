import React, {useState} from "react";
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LoginPage = () =>{

    const [user, setUser] = useState({name:'', username:''});
    const [error, setError] = useState('');

    const login = (details) => {
        console.log(details);
        //see if username and password combo are in the database
        //if(axios.get('/username') ?)
        setUser({
            name: details.name,
            username: details.username
        })
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({login, error}){
    const [details, setDetails] = useState({
        username: '',
        password: ''
    });

    const submitHandler = e =>{
        e.preventDefault();

        login(details);
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className = "form-inner">
                {/* <h2>Login</h2>
                <div className = "form-group">
                    <label htmlFor ="name">Name:</label>
                    <input type = "text" name ="name" id ="name" onChange = {e => setDetails({...details, name: e.target.value})} value = {details.name} />
                </div> */}
                <h2>Login</h2>
                <div className = "form-group">
                    <label htmlFor ="username">Username:</label>
                    <input placeholder='Enter Username' type = "text" name ="username" id ="username" onChange = {e => setDetails({...details, username: e.target.value})} value = {details.username} />
                </div>
                <div className="formgroup">
                    <label htmlFor = "password">Password:</label>
                    <input placeholder='Enter Password' type = "password" name ="password" id ="password" onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
    
                <input type="submit" value="Login" />
                
            </div>
        </form>
    )
}

export default LoginForm;
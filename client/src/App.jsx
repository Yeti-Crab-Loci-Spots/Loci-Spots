import React from "react";
import "./styles.css";
import MainContainer from '../Components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Components/Signup';
import LoginPage from '../Components/LoginPage';


const App = (props) => {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<MainContainer/>}></Route>
        <Route path ='/signup' element = {<Signup/>}></Route>
        <Route path ='/login' element = {<LoginPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;

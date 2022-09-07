import React, { Fragment } from 'react';
import './styles.css';
import MainContainer from '../Components/MainContainer'
import LoginPage from '../Pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom'


const App = (props) => {
  const user = false;

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={user ? <MainContainer /> : <LoginPage />}/>
      </Routes>
    </div>
  );
};

export default App;

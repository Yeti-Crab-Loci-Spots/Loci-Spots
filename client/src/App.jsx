import React, { Fragment } from 'react';
import './styles.css';
import MainContainer from '../Components/MainContainer'
import LoginPage from '../Pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom'

 

const App = (props) => {

  const [userToken, setUserToken] = useState('');

  useEffect( () => {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:3000/auth", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(responseJson => {
        setUserToken(responseJson.userId);
      })
    })

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={userToken ? <MainContainer/> : <LoginPage />}/>
      </Routes>
    </div>
  );
};

export default App;

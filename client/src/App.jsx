import React from "react";
import "./styles.css";
import MainContainer from '../Components/MainContainer'
import LoginPage from "../Pages/LoginPage";


const App = (props) => {
  // const fetchAccounts = () => {
  //   fetch('/api')
  //   // .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  // }
  // fetchAccounts()
  return (
    <>
      <LoginPage />
    </>
  );
};

export default App;

import React from "react";
import "./styles.css";
import MainContainer from '../Components/MainContainer'
import LoginPage from "../Pages/LoginPage";
import { Box } from '@mui/material';


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
    <Box>
      <LoginPage />
    </Box>
  );
};

export default App;

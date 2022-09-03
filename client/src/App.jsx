import React from 'react';
import './styles.scss';
import MainContainer from './Components/MainContainer';

const App = (props) => {
  const fetchAccounts = () => {
    fetch('/api')
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  fetchAccounts();
  return (
    <>
      <MainContainer />
    </>
  );
};

export default App;

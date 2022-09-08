import React, { useState, useEffect } from 'react';
import RestaurantContainer from './RestaurantContainer';
import Logo from '../src/media/LociSpotLogo.png';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import DropDownList from './DropDownList';

const MainContainer = ({user}) => {
  //main container will store the state of the drop down list and the state of the restaurant container which contains a list of the restaurants
  const [city, setCity] = useState('New York');
  /**
   * List of city hooks
   */
  const [cities, setCities] = useState(['New York', 'Toronto', 'Omaha']);
  //each object will contain key value pair of the city and an array of restaurants

  const logout = () =>{
    sessionStorage.clear();
    window.location.reload(false);
  }


  useEffect(() => {}, [city]);
  return (
    <div>
      <div className='nav'>
        <div className='nav-container'>
          <img className='logo' src={Logo} />
          <span className='citySearch'>
            <DropDownList setCity={setCity} city={city} cityList={cities} />
          </span>

          <div>{sessionStorage.getItem('isLoggedIn') ? <div className ="loginsignup">Welcome {sessionStorage.getItem('name')} <button className = "logout" onClick = {logout}>Logout</button></div> :  <span className ="loginsignup">
          <Link to ='/signup'>
          <button className='Signup'>
          Signup
        </button>
        </Link>
        <Link to = '/login' >
        <button className='login'>
          Login
        </button>
        </Link>
          </span>}</div>

        </div>
        
      </div>
      <div>
        <RestaurantContainer city={city} cityList={cities} setCity={setCity} />
      </div>
    </div>
  );
};

export default MainContainer;
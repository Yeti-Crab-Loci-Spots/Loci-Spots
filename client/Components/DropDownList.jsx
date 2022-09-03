import React, {useState} from 'react'
import {Select} from '@mui/material';
const DropDownList = (props) => {
  const { city:newCity, setCity } = props;
  const handleClick = () => {
    setCity(newCity + 1)
  }
  return (
     <button onClick={handleClick}></button>
    
  )
}

export default DropDownList
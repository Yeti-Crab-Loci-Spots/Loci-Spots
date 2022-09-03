import React, {useState} from 'react'


const DropDownList = (props) => {
  const { city, setCity } = props;
  const cityList = ['new york', 'toronto', 'omaha'];
  const cityElements = [];
  cityList.forEach(city => {
    cityElements.push(<option value={`${$city}`}>{`${city}`}</option>)
  });
  const handleChange = (event) => {
    setCity(event.target.value)
  }
  return (
    <>
      <label>
        Select your city
        <select selectedCity={selectedCity} onChange={handleChange}>
          {cityElements}
        </select>
      </label>
    </>

  )
}

export default DropDownList
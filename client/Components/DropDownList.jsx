import React, { useState } from 'react';

const DropDownList = (props) => {
  /**
   * @params = (city, setCity, cityList)
   * @returns rendered dropdown list and modifies state on selection
   */
  /**
   * Pull in props from Main Container
   */
  const { city, setCity, cityList } = props;

  /**
   * Populate city elements array full of city option nodes
   */
  const cityElements = [];
  cityList.forEach((city) => {
    cityElements.push(
      <option key={`${city}`} value={`${city}`}>{`${city}`}</option>
    );
  });
  /**
   * Handle change function that sets the city state to selected
   * city
   */
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <label>
        Select a City: <br></br>
        <select className='dropdown' onChange={handleChange}>
          {cityElements}
        </select>
      </label>
    </>
  );
};

export default DropDownList;

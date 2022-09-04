import React, { useState } from 'react'

const AddRestaurant = (props) => {
  const {setModal, showModal, cityList, setCity} = props

  const [restaurantData, setNewRestaurant] = useState({
    name: '',
    address: '',
    city: '',
    foodtype: '',
    link: ''
  })

  const handleClose = (e) => {
    setModal(false)
    console.log(e.target.value)
    setCity(e.target.value)
  }
  const cityElements = [];
  cityList.forEach(city => {
    cityElements.push(<option key={`${city}`} value={`${city}`}>{`${city}`}</option>)
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewRestaurant({
      ...restaurantData,
      [name]: value,
    });
    console.log(restaurantData);
  }
  const handleSubmit = async (e) => {
    console.log(restaurantData)
    const restaurantObj = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(restaurantData),
    }
    fetch("/api", restaurantObj)
      .then((response) => response.json())
      .then((data)=> console.log(data))
      .catch((err) => console.log('Error in submitting a new restaurant,', err))
    // try {
    //   const restaurantObj = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json"},
    //     body: JSON.stringify(restaurantData),
    //   }
    //   const response =  fetch("/api", restaurantObj)
    //   const data = await response.json()
    //   console.log(data)
    // } catch (error) {
    //   console.log('Error in Submitting a new restaurant,', error)
    // }
    // setModal(false);

  }
  return (
    <div className='modal'>
      <section>
      <form>
        <p>
        <label htmlFor="restaurant-name">Restaurant Name</label>
        <input type="text"  name='name' placeholder='Add restaurant name' onChange={handleInputChange}/>
        </p>
        <p>
        <label htmlFor="restaurant-address">Restaurant Address</label>
        <input name='address' type="text" placeholder='Add restaurant address'onChange={handleInputChange}/>
        </p>
        <p>
        <label htmlFor="restaurant-link">Restaurant Link</label>
        <input name='link' type="text" placeholder='Add restaurant link'onChange={handleInputChange}/>
        </p>
        <p>
        <label htmlFor="restaurant-foodtype">Cuisine</label>
        <input name='foodtype' type="text" placeholder='Add Cuisine'onChange={handleInputChange}/>
        </p>
        <label htmlFor="restaurant-city">
          Search By City
          <select name='city' onChange={handleInputChange}>
            {cityElements}
          </select>
          </label>
          <button type='submit' onClick={handleSubmit} >Submit</button>
        <button onClick={handleClose}>Close</button>
      </form>
      </section>
      
    </div>
  )
}


// "resto_id": 7,
// "restoname": "Urban Vegan Kitchen",
// "address": "41 Carmine St",
// "city": "New York",
// "foodtype": "Vegan",
// "link": "https://cheqout.com/menu/order/aa410620-2723-4880-bd50-faa48f02e3a4",
// "votes": 2
/**
 * 
 * body = {name, address, city, foodType, link}
 */
export default AddRestaurant
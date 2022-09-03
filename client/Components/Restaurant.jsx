import React from 'react'

const Restaurant = (props) => {
  const { restoObj  } = props;
  const {resto_id, restoname, address, city, foodtype, link, votes } = restoObj;
  const handleUpVote = (e) => {
    setVote({resto_id, action: 'upvote'})
  }
  const handleDownVote = (e) => {
    setVote({ resto_id, action: 'downvote' })

  }
    return (
    <div className="RestaurantBox">
      <h1>{restoname} <button className="delete" onClick={() => handleDelete}>Delete</button></h1>
      <h3>{address}</h3>
      <h3>{foodtype}</h3>
      <h3>{link}</h3>
      <h3>{votes}</h3>
      <button className="upVote" onClick={() => handleUpVote}>up</button>
      <button className="downVote" onClick={() => handleDownVote}>down</button>
    </div>
  )
}

export default Restaurant
 
// resto_id SERIAL PRIMARY KEY,
// restoName VARCHAR(50),
// address VARCHAR(50),
// city VARCHAR(50),
// foodType VARCHAR(50),
// link VARCHAR(300),
// votes INTEGER
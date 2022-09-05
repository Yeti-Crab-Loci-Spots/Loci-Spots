import React from 'react';

const Restaurant = (props) => {
  const { restoObj, setVote, currentVote, setDeleted } = props;
  const { resto_id, restoname, address, city, foodtype, link, votes,  } =
    restoObj;
  const handleUpVote = (e) => {
    // console.log('in handle up vote');
    // console.log(resto_id, votes);
    setVote({ resto_id: resto_id, action: 'upvote' });
    // console.log(currentVote);
  };
  const handleDownVote = (e) => {
    setVote({ resto_id, action: 'downvote' });
  };
  const handleDelete = (e) => {
    (async () => {
      try {
        
        await fetch('/api/', {
          method: 'DELETE',
          body: JSON.stringify({ resto_id }),
          headers : {
            'Content-Type' : 'application/json',
          },
        })
        setDeleted({resto_id})
        console.log(`Deleted ${restoname}`);
      } catch (error) {
        console.log(`Error attempting to delete ${restoname}, error`)
      }
      
    })();
  }
  return (
    <div className='restaurant-container'>
      <div className='voteSection'>
        <button className='upVote voteBtn' onClick={handleUpVote}>
          &#8679;
        </button>
        <p className='voteCount'>{votes}</p>
        <button className='downVote voteBtn' onClick={handleDownVote}>
          &#8681;
        </button>
      </div>
      <div className='infoSection'>
        <p className='resto-name'>
          {restoname} <span className='cuisine'>[{foodtype}]</span>
        </p>
        <button className='deleteBtn' onClick={handleDelete}>
          Delete
        </button>
        <p className='info-text'>{address}</p>
        <p className='info-text'>
          {link === '' ? (
            'No link available'
          ) : (
            <a href={link}> Link to Restaurant</a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;

// resto_id SERIAL PRIMARY KEY,
// restoName VARCHAR(50),
// address VARCHAR(50),
// city VARCHAR(50),
// foodType VARCHAR(50),
// link VARCHAR(300),
// votes INTEGER

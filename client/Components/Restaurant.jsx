import React, { useEffect, useState } from "react";
import CommentSection from "./CommentsSection";

const Restaurant = (props) => {
  const { restoObj, setVote, currentVote, setDeleted } = props;
  const { resto_id, restoname, address, city, foodtype, link, votes } =
    restoObj;
  //the state below is component state. It is accessible throughout entire page. When you call it, it rerenders that part of the code.
  const [showComments, setShowComments] = useState(false);
  const [restaurantComments, setRestaurantComments] = useState([]);
  const handleUpVote = (e) => {
    // console.log('in handle up vote');
    // console.log(resto_id, votes);
    setVote({ resto_id: resto_id, action: "upvote" });
    // console.log(currentVote);
  };

  useEffect(() => {
    (async () => {
      try {
        // const comments = await fetch(`/api/comments/id=${resto_id}`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        const comments = [
          { username: "Rami", body: "Great restaurant!" },
          { username: "Kara", body: "Love the food at andrews" },
          { username: "Evan", body: "Best Andrews in USA" },
          {
            username: "Andrew",
            body: "Hey I am andrew and more than happy to answer your questions!",
          },
        ];
        setRestaurantComments(comments);
      } catch (error) {
        console.log(`Error attempting to delete ${restoname}, error`);
      }
    })();
  }, []);

  const handleDownVote = (e) => {
    setVote({ resto_id, action: "downvote" });
  };
  const handleDelete = (e) => {
    (async () => {
      try {
        await fetch("/api/", {
          method: "DELETE",
          body: JSON.stringify({ resto_id }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setDeleted({ resto_id });
        console.log(`Deleted ${restoname}`);
      } catch (error) {
        console.log(`Error attempting to delete ${restoname}, error`);
      }
    })();
  };

  const handleComments = (e) => {
    // the bang! is opposite for showing comments
    setShowComments(!showComments);
  };

  console.log(showComments);

  return (
    <div>
      <div className="restaurant-container">
        <div className="voteSection">
          <button className="upVote voteBtn" onClick={handleUpVote}>
            &#8679;
          </button>
          <p className="voteCount">{votes}</p>
          <button className="downVote voteBtn" onClick={handleDownVote}>
            &#8681;
          </button>
        </div>
        <div className="infoSection">
          <p className="resto-name">
            {restoname} <span className="cuisine">[{foodtype}]</span>
          </p>
          <button className="deleteBtn" onClick={handleDelete}>
            Delete
          </button>
          <button className="viewAddBtn" onClick={handleComments}>
            View/Add Comment
          </button>
          <p className="info-text">{address}</p>
          <p className="info-text">
            {!link ? (
              "No link available"
            ) : (
              <a
                href={link.slice(0, 4) === "http" ? link : "http://" + link}
                target="_blank"
              >
                {" "}
                Link to Restaurant
              </a>
            )}
          </p>
        </div>
      </div>
      {showComments && <CommentSection comments={restaurantComments} />}
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

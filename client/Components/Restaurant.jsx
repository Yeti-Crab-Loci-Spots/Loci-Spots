import React, { useEffect, useState } from "react";
import CommentSection from "./CommentsSection";

const Restaurant = (props) => {
  const [newComment, setComment] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let comment = { username: "rami", body: newComment, resto_id: resto_id };
    console.log(comment);
    // const res = await axios.post(url, comment) //Kara/Evan please set up a POST route to send the comment to the database. We will also send the re
    setRestaurantComments([comment, ...restaurantComments]);
    setComment("");
  };

  //handleChange is built into input field and it gets triggered every time we interact with the input field.
  //Remember: e symbolizes the event that is happening. It records all the data, all the creepy things the user is typing, we have acceSS  to. Oh my God indeed.
  const handleChange = (e) => {
    //{currentTarget:input} is default in the input field. When input field gets changed, it will give you information of what was triggered, whats new value, etc.
    // console.log("I am current target!!!:", input);
    setComment(e.target.value); //updating data from the state. In this case, as user types in every keystroke, it will change data set in useState
  };

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
      {showComments && (
        <div>
          <form className={"form_container"} onSubmit={handleSubmit}>
            <h4>Add your wonderful comment below ...</h4>
            <input //html input
              type="text"
              placeholder="comment"
              name="firstName"
              onChange={handleChange} //onChange gets triggered when user interacts with input, in this case the text placeholder
              value={newComment} //every keystroke saves to value which we can use in input from handleChange function definition.
              required
              className={"newComment"}
            />
            <button type="submit">Add Comment</button>
          </form>
          <CommentSection comments={restaurantComments} />
        </div>
      )}
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

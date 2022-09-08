import React, { useState, useEffect, useRef } from "react";

const CommentSection = (props) => {
  let comments = props.comments;
  const [vote, setVote] = useState(0);
  const [newComment, setComment] = useState("");
  //PATCH REQUEST
  const handleUpVote = (e) => {
    setVote(vote + 1);
  };

  const handleDownVote = (e) => {
    setVote(vote - 1);
  };

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div>
      {props.comments.map((comment) => (
        <div className={"comment"} key={comment.username}>
          <div className="comment_username">Username: {comment.username}</div>
          <div className="comment_body">Comment: {comment.body}</div>
          <form className={"form_container"} onSubmit={handleSubmit}>
            <h3>Add a comment</h3>
            <input //html input
              type="text"
              placeholder="comment"
              name="firstName"
              onChange={handleChange} //onChange gets triggered when user interacts with input, in this case the text placeholder
              value={newComment} //every keystroke saves to value which we can use in input from handleChange function definition.
              required
              className={"newComment"}
            />
            <button type="submit" className={"deleteBtn"}>
              Add Comment
            </button>
          </form>

          <div className="voteSection">
            <button className="upVote voteBtn" onClick={handleUpVote}>
              &#8679;
            </button>
            <p className="voteCount">{vote}</p>
            <button className="downVote voteBtn" onClick={handleDownVote}>
              &#8681;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;

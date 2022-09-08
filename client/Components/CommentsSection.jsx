import React, { useState, useEffect, useRef } from "react";

const CommentSection = (props) => {
  let comments = props.comments;
  const [vote, setVote] = useState(0);
  //PATCH REQUEST
  const handleUpVote = (e) => {
    setVote(vote + 1);
  };

  const handleDownVote = (e) => {
    setVote(vote - 1);
  };

  return (
    <div>
      {props.comments.map((comment) => (
        <div className={"comment"} key={comment.username}>
          <div className="comment_username">Username: {comment.username}</div>
          <div className="comment_body">Comment: {comment.body}</div>
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

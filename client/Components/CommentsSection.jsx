import React, { useState, useEffect, useRef } from "react";

const CommentSection = (props) => {
  let comments = props.comments;
  console.log(comments);
  return (
    <div>
      {props.comments.map((comment) => (
        <div key={"comment-username"}>
          <div>{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;

import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">{title}</h4>
      <p> {body}</p>
    </div>
  );
};

export default Post;

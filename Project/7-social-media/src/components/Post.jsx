import React from "react";

const Post = ({post}) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">{post.tittle}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;

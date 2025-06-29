import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store /postList";
const Post = ({ post }) => {
 const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.tittle}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;

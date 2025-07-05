import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeM from "./WelcomeM";
import { PostList as PostListData } from "../store /postList";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, fetching} = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeM />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;

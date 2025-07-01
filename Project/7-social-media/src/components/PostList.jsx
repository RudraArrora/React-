import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeM from "./WelcomeM";
import { PostList as PostListData } from "../store /postList";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const [fetching, setFetching ]= useState(false);
const constroller = new AbortController;
const signal =constroller.signal;
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);

      });
return () =>{
  console.log("Clean Up ")
  // constroller.abort();
}
  }, []);

  return (
    <>
    {fetching &&<LoadingSpinner></LoadingSpinner> }
      {!fetching && postList.length === 0 && <WelcomeM />}
      {!fetching&& postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;

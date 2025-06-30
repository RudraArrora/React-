import { useContext } from "react";
import Post from "./Post"
import WelcomeM from "./WelcomeM";
import { PostList as PostListData } from "../store /postList";
 const PostList = () =>{
const {postList , addPosts} = useContext(PostListData)
const onGetPostClic = ()=>{
fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then(data =>{
    addPosts(data.posts)
  });
}
    return (
      <>
      {
        postList.length === 0 && <WelcomeM onGetPostClick={onGetPostClic}/>
      }
        {postList.map((post) => (
          <Post key={post.id} post={post} ></Post>
        ))}
      </>
    );
}
export default PostList;
import { useCallback } from "react";
import { createContext, useReducer,useState,useEffect } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching : false,
  deletePost: () => {},
  addPosts: () => {},
});

const postReducer = (currentPostList, action) => {
  let newPost = currentPostList;
  if (action.type === "Delete_Post") {
    newPost = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add Post") {
    newPost = [action.payload, ...currentPostList];
  } else if (action.type === "AddPosts") {
    newPost = action.payload.posts;
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(postReducer, []);
    const [fetching, setFetching] = useState(false);
    const constroller = new AbortController();
    const signal = constroller.signal;
    useEffect(() => {
      setFetching(true);
      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          addPosts(data.posts);
          setFetching(false);
        });
      return () => {
        console.log("Clean Up ");
        // constroller.abort();
      };
    }, []);

  const addPost = (post) => {

    dispatchPost({
      type: "Add Post",
      payload: post
    });
  };
  const addPosts = useCallback(
    (posts) => {
   console.log(posts);
    dispatchPost({
      type: "AddPosts",
      payload: {
        posts,
      },
    });
  },
  [dispatchPost]
  ) 
  
  const deletePost = (postId) => {
    dispatchPost({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
    console.log(`deleted post caleed for ${postId}`);
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

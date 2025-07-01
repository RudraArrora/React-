import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
  const addPost = (userId, postTittle, postBody, reactions, tags) => {

    dispatchPost({
      type: "Add Post",
      payload: {
        id: Date.now(),
        title: postTittle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addPosts = (posts) => {
   console.log(posts);
    dispatchPost({
      type: "AddPosts",
      payload: {
        posts,
      },
    });
  };
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

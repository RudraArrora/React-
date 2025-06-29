import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currentPostList, action) => {
  let newPost = currentPostList;
  if (action.type === "Delete_Post") {
    newPost = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if (action.type === "Add Post"){
    newPost = [action.payload,...currentPostList]
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(postReducer, DEFAULT_POST_LIST);
  const addPost = (userId, postTittle, postBody, reactions, tags) => {
    // console.log(`${userId} ${postTittle} ${postBody} ${reactions} ${tags}`);
    dispatchPost({
      type: "Add Post",
      payload: {
        id: Date.now(),
        tittle: postTittle,
        body: postBody,
        reactions:reactions,
        userId:userId,
        tags: tags,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    tittle: "Going Mumbai",
    body: "Hi Friends , I am going to mumbai for vacation",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjyoing"],
  },
  {
    id: "2",
    tittle: "Rannd",
    body: "Hi Friends Raundy Orton ",
    reactions: 15,
    userId: "user-1",
    tags: ["vacation", "Mumbai", "Enjyoing"],
  },
];
export default PostListProvider;

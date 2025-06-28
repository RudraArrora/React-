import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(postReducer, DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = () => {};
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
  },
  {
    id: "2",
    tittle: "Rannd",
    body: "Hi Friends Raundy Orton ",
    reactions: 15,
    userId: "user-1",
  },
];
export default PostListProvider;

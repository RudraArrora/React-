import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./source/App.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <PostList></PostList>,
      },

      {
        path: "/createPost",
        element: <CreatePost></CreatePost>,
        action: createPostAction,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

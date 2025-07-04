import Header from "../components/header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListProvider from "../store /postList";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
           <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

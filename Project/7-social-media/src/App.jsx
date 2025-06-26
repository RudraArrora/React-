import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from "./components/CreatePost";
import PostList from './components/PostList';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {


  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className='content'>
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App

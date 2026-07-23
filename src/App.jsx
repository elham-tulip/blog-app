import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Bookmark from "./pages/Bookmark";
import Navbar from "./components/Navbar";


function App() {
  const[createdPosts,setCreatedPosts]=useState([]);
  return (
  
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home  
        createdPosts={createdPosts}/>} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/create" element={<CreatePost 
        createdPosts={createdPosts}
        setCreatedPosts={setCreatedPosts}/>} />

        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>

    </div>
    
  );
}

export default App;
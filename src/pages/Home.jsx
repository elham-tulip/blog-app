import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

function Home({createdPosts}) {
  const navigate=useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const allposts=[...createdPosts,...posts];

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">error</p>;
  }

  return(
    <div className="max-w-6xl mx-auto grid-cols-4 p-6">
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to My Blog App
        </h1>

        <p className="mt-4 text-gray-600">
          A space for thoughtful narratives, minimalist design,
          and the art of sharing stories that matter.
        </p>
      </div>


      <div className="flex justify-between items-center mt-10">
        <div>
          <h2 className="text-3xl font-bold">
            Latest Stories
          </h2>

          <p className="text-gray-600 mt-2">
            Discover the latest thoughts and narratives from our community.
          </p>
        </div>

        {error && (
  <div className="bg-red-100 border border-red-300 text-red-600 rounded-lg p-3 mt-4 text-sm">
    <p className="font-bold">
      Error: Failed to fetch
    </p>
    <p>
      We're having trouble connecting to the server. Please check your connection and try again.
    </p>
  </div>
)}



        <button 
          onClick={()=>navigate("/create")}
        className="bg-purple-900 rounded px-3 py-3 text-white font-medium hover:bg-blue-700 transition">
          + Create New Post
        </button>
      </div>


  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {allposts.map((post) => (
          // home will render both posts
          <BlogCard 
            key={post.id} 
            post={post}
          />
        ))}
      </div>

    </div>
);
}

export default Home;
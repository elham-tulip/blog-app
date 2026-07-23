import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

function CreatePost({createdPosts, setCreatedPosts}) {

  const navigate = useNavigate();

  function handleCreatePost({title, content}) {

    if (title.trim() === "") {
      alert("Title cannot be empty.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      body: content,
      tags: [],
      isCreated: true
    };

    alert("post created successfully!!");

    setCreatedPosts([...createdPosts, newPost]);

    navigate("/");
  }

  return (
    <div className="rounded max-w-3xl mx-auto p-6 bg-gray-100 mt-10">

      <h1 className="text-4xl font-bold text-pink-900">
        Write a New Post
      </h1>

      <BlogForm onSubmit={handleCreatePost}/>

    </div>
  );
}

export default CreatePost;
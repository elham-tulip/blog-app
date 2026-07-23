import { useState } from "react";

function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ title,content});
    
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2 className="text-2xl mt-5 mb-6">
        Title
      </h2>

      <input
        type="text"
        placeholder="Enter post title."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="border bg-white rounded"
      />

      <h3 className="text-2xl mt-4">
        content
      </h3>

      <textarea
        placeholder="Start writing here..."
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        className="w-full border rounded p-3 mt-4 h-40 bg-white"
      />

      <button 
        type="submit"
        className="bg-blue-600 rounded px-7 py-4 mx-90 hover:bg-white"
      >
        Post
      </button>

    </form>
  );
}

export default BlogForm;
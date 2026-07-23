import { Link } from "react-router-dom";

function  BlogCard({post}) {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">

        <div className="flex gap-2 mb-3">
          {post.tags.map((tag)=>(
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>


        <h2 className="font-bold text-lg">
          {post.title}
        </h2>


        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {post.body}
        </p>


        <div className="flex justify-between mt-6 text-xs">
          <span className="text-blue-700">
            Read More →
          </span>

          <span className="text-gray-400">
            5 min read
          </span>
        </div>

      </div>
    </Link>
  );
}

export default BlogCard;
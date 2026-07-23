import { useAtom } from "jotai"; 
// allows to read shared book  mark data
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import { Link } from "react-router-dom";


function Bookmark() {
  const[bookmarks]=useAtom(bookmarksAtom)
  // becau we only need a value
  if (bookmarks.length===0){
    return<p className="font-bold text-2xl flex justify-center">No Bookmarks Yet</p>;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 " >
      <h1 className="font-bold text-3xl flex justify-center mb-8">Bookmarked Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((post)=>(
          <Link to={`/blog/${post.id}`} key={post.id}>
           <div className="border rounded-lg p-4 shadow-lg hover:shadow-md transition">

  <h2 className="text-lg font-bold mb-3">
    {post.title}
  </h2>

  <p className="text-md text-gray-600 line-clamp-3">
    {post.body}
  </p>

</div>

          </Link>
        )) }
      </div>
    </div>
  );
}

export default Bookmark;
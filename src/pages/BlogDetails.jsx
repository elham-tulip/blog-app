import { useNavigate, useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import BookmarkButton from "../components/BookmarkButton";
import CommentCard from "../components/commentCard";

function BlogDetails(){
  const navigate=useNavigate()
  const { id } = useParams();
  const [post,setPost]=useState(null);
  const[comments,setComments]=useState([]);
  useEffect(()=>{
    fetch(`https://dummyjson.com/posts/${id}`)
    .then((res)=>res.json())
      .then((data)=>{
        setPost(data);
      });


      fetch(`https://dummyjson.com/comments/post/${id}`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
  setComments(data.comments);
});

  }, [id]);


  if (!post) {
    return <p>Loading...</p>;
  }

  
  return(
     <div>
         <div>
        <button onClick={() => navigate("/")} 
        className="font-bold mt-10 mb-20 mx-20 text-white bg-black py-2 px-3 hover:bg-red-700 rounded" >
           Back
        </button>
        </div>
    
     <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold">
        {post.title}
      </h1>

      <p className="mt-6 text-gray-600">
        {post.body}
      </p>

      <div className="flex gap-2 mt-6">
        {post.tags.map((tag)=>(
          <span 
            key={tag}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            #{tag}
          </span>
            
        ))}
      </div>
     <div>
      <BookmarkButton post={post}
      
      />
      <h2 className="text-2xl font-bold mt-8">Comment</h2>
     </div>
     <div className="mt-4">
     {comments.map((comment)=>(
      <CommentCard
      key={comment.id}
      comment={comment}/>
     ))}


</div>
    </div>
    </div>
  );
  }
 
export default BlogDetails;

function commentCard({comment}){

 return(
 <div className="border rounded-lg p-4 mt-4 shadow-sm bg-gray-50">
    <p className="text-gray-700"> {comment.body}</p>
    <span className="text-sm text-gray-500 mt-3">
        by:{comment.user.username}
    </span>
 </div>
 );
}
export default commentCard;
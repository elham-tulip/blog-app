import{useAtom} from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";

function BookmarkButton({post}){
    const [bookmarks,setbookmarks]=useAtom(bookmarksAtom);
    const isBookmarked = bookmarks.some(
        // Does at least one item satisfy this condition
        //   true or false
        (item)=> item.id ===post.id
      )
    function handleBookmark(){
        
       if(isBookmarked){
         setbookmarks(
            bookmarks.filter((item)=>item.id !==post.id)
            // true remove
         );
       } else {
        setbookmarks([...bookmarks,post])
        // take everything in the book mark array

       }
    }
return(
        <div className="flex justify-center mt-8">
        <button onClick={handleBookmark}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-red-600 ">
            {isBookmarked? "Remove Bookmark" : "Bookmark"}
        </button>
        </div>
    );
 
}
export default BookmarkButton;
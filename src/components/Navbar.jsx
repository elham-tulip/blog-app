
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="bg-purple-300 shadow-sm p-4 flex justify-between items-center border-gray-100">
         <Link to="/" className="text-xl font-bold text-purple-800">
            Blog App
         </Link>
         <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/create" className="hover:text-blue-600 transition">Create Post</Link>
            <Link to="/bookmarks" className="hover:text-blue-600 transition">Bookmarks</Link>

          </div>
        </nav>
    );
}
export default Navbar;
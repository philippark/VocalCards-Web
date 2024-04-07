import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="links">
            <Link to = "/create">Create</Link>
            <Link to = "/">Home</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;
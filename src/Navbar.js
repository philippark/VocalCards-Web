import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import Create from './FlashcardDetails';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="links">
            <Link to = "/edit/create">
                +
            </Link>
            
            <Link to = "/">Home</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;
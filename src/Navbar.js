import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import Create from './Create';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="links">
            <Popup trigger = {<button>+</button>} >
                <Create />
            </Popup>

            <Link to = "/">Home</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="Navbar">
          
            <div className="links">
                <Link to="/">Home</Link>
        
                <Link to="/skills">Add product</Link>
                <Link to="/buy">buy</Link>
                <Link to="/coact">About</Link>
                <Link to="/cart" id="cart">cart</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;

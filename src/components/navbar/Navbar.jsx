import { Link } from 'react-router-dom';
import "./Navbar.css";
import { BiSolidPlane } from "react-icons/bi"; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to ="/">
          <div className="navbar-logo">
          <BiSolidPlane />
          <span>Rise of Coding</span>
        </div>
        </Link>

        <Link to ="/hotels"><div>
          <button className="navbar-button">Book Now</button>
        </div></Link>
      </div>
    </div>
  );
}


export default Navbar

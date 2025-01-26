import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>

      <ul className="navbar-links">
        <li><NavLink to="/home" className="active">Home</NavLink></li>
        <li><NavLink to="/about" className="active">About</NavLink></li>
        <li><NavLink to="/services" className="active">Services</NavLink></li>
        <li><NavLink to="/contact" className="active">Contact</NavLink></li>
      </ul>

      <div className="navbar-profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </nav>
  );
};

export default Navbar;

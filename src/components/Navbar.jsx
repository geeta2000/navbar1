import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="menu">
      <Link to="/">
        <img src={logo} alt="" className="logo" width={100} />
      </Link>

      <div>
        <ul className="navbar">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/number">
            <li>Namber</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/page">
            <li>Page</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

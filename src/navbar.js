import React from "react";
import { NavLink } from "react-router-dom";
import "./global.css";
let Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1 className="websiteName">stocksUpdate</h1>
        </div>
        <div className="navbarLinks">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/liveData">Live data</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;

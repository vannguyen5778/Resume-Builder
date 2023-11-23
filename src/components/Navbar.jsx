import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className={` background logo`}>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>resume</li>
        <li>cover letter</li>
        <li>resume writing</li>
        <li>blog</li>
        <li>FAQ</li>
      </ul>
      <div className="registration">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

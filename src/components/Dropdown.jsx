import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown() {
  const [dropDown, setDropDown] = useState(false);

  function handleClick(event) {
    setDropDown((prevState) => !prevState);
  }

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn" onClick={handleClick}>
          <i className="fa fa-caret-down"></i>
        </button>
        {dropDown && (
          <div className="dropdown-content">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
            <Link onClick={handleClick} to="/about">
              About
            </Link>
            <Link onClick={handleClick} to="/contact">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

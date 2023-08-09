import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export default function Dropdown({ showDropdown, setshowDropdown, ...props }) {
  function handleClick(event) {
    setshowDropdown((prevState) => !prevState);
  }

  // Tracks window size to hide dark mode toggle at certain width
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateDimension = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn" onClick={handleClick}>
          <i className="fa fa-caret-down"></i>
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            {screenWidth < 450 && (
              <div className="dropdown-toggle">
                <DarkModeToggle
                  onChange={props.toggleTheme}
                  mode={props.mode}
                  dark="Dark"
                  light="Light"
                  size="sm"
                  ariaLabel="Toggle color scheme"
                />
              </div>
            )}
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

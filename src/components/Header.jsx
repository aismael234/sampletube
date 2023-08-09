import React, { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "./Dropdown";
import turntable from "../assets/turntable.svg";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export default function Header(props) {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const dropdownRef = useRef(null);
  const [showDropdown, setshowDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowDropdown(false);
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <header className="header">
      <div className="header-left" onClick={handleClick}>
        <img src={turntable} alt="A turntable." className="header-logo" />
        <h3 className="header-name">
          <span className="header-name-sample">Sample</span>Tube
        </h3>
      </div>
      <div className="header-right">
        {screenWidth >= 450 && (
          <DarkModeToggle
            onChange={props.toggleTheme}
            mode={props.theme}
            dark="Dark"
            light="Light"
            size="sm"
            ariaLabel="Toggle color scheme"
          />
        )}
        <div ref={dropdownRef}>
          <Dropdown
            showDropdown={showDropdown}
            setshowDropdown={setshowDropdown}
            className="header-dropdown"
            toggleTheme={props.toggleTheme}
            mode={props.theme}
          />
        </div>
      </div>
    </header>
  );
}

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "./Dropdown";
import turntable from "../assets/turntable.svg";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  return (
    <header className="header">
      <div className="header-left" onClick={handleClick}>
        <img src={turntable} className="header-logo" />
        <h3 className="header-name">
          <span className="header-name-sample">Sample</span>Tube
        </h3>
      </div>
      <Dropdown />
    </header>
  );
}

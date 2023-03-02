import React, { useState, useCallback, useEffect } from "react";
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

  const [checked, setChecked] = useState(props.theme == "dark" ? true : false);

  useEffect(() => {
    setChecked(props.theme == "dark" ? true : false);
  }, [props.theme]);

  return (
    <header className="header">
      <div className="header-left" onClick={handleClick}>
        <img src={turntable} className="header-logo" />
        <h3 className="header-name">
          <span className="header-name-sample">Sample</span>Tube
        </h3>
      </div>
      <div className="header-right">
        <DarkModeToggle
          onChange={props.toggleTheme}
          mode={props.theme}
          dark="Dark"
          light="Light"
          size="sm"
          ariaLabel="Toggle color scheme"
        />
        {/* <Switch
          height={20}
          width={50}
          onColor={"#fff"}
          offColor={"#161616"}
          handleDiameter={27}
          onHandleColor={"#161616"}
          offHandleColor={"#fff"}
          className="header-theme-toggle"
          onChange={props.toggleTheme}
          uncheckedHandleIcon={
            <SunLogo
              className="header-icon-sun"
              style={{ fill: "black", stroke: "black" }}
            />
          }
          checkedHandleIcon={
            <MoonLogo
              className="header-icon-moon"
              style={{ fill: "white", stroke: "white" }}
            />
          }
          checked={checked}
        /> */}
        <Dropdown className="header-dropdown" />
      </div>
    </header>
  );
}

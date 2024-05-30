import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../assets/Logo-red.png";
import { Link } from "react-router-dom";

function NavBar() {

  const [activePath, setActivePath] = useState("/");

  function handleClick(path) {
    setActivePath(path);
  }

  return (
    <header className="header">
      <div>
        <img src={Logo} alt="StayNomad Logo" className="logo" />
      </div>
      <nav className="navtabs">
        <Link to="/" onClick={()=>handleClick("/")} className={`navtab ${activePath === "/" ? "active" : ""}`}>
          Find a Stay
        </Link>
        <Link to="/list" onClick={()=>handleClick("/list")}  className={`navtab ${activePath === "/list" ? "active" : ""}`}>
          List My Place
        </Link>
        <Link to="/support" onClick={()=>handleClick("/support")} className={`navtab ${activePath === "/support" ? "active" : ""}`}>
          Support Center
        </Link>
      </nav>

      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="#">
            <li>My Profile</li>
          </a>
          <a>
            <li>Saved</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

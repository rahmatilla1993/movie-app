import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper green accent-4">
        <a href="#" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

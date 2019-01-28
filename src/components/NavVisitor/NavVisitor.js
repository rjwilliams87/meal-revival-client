import React from "react";
import { Link } from "react-router-dom";

export default function NavVisitor(props) {
  return (
    <div className="dropdown">
      <div className="dropbtn">
        <i class="fas fa-bars fa-2x" />
      </div>
      <div className="dropdown-content">
        <ul className="nav__ul">
          <Link className="nav__link" to="/">
            <li className="nav__li">Home</li>
          </Link>
          <Link className="nav__link" to="/donations/map">
            <li className="nav__li">Map</li>
          </Link>
          <Link className="nav__link" to="/login">
            <li className="nav__li">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

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
          <li className="nav__li">
            <Link className="nav__link" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to="/donations/map">
              Donations
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

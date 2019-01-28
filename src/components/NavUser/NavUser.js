import React from "react";
import { Link } from "react-router-dom";

export default function NavUser(props) {
  return (
    <div className="dropdown">
      <div className="dropbtn">
        <i className="fas fa-bars fa-2x" />
      </div>
      <div className="dropdown-content">
        <ul className="nav__ul">
          <Link className="nav__link" to="/">
            <li className="nav__li">Profile</li>
          </Link>
          <Link className="nav__link" to="/donations/map">
            <li className="nav__li">Map</li>
          </Link>
          <Link className="nav__link" to="/login">
            <li className="nav__li" onClick={props.clearAuth}>
              Log Out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

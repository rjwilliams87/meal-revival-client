import React from "react";
import { Link } from "react-router-dom";

export default function NavUser(props) {
  return (
    <ul className="nav__ul">
      <li className="nav__li">
        <Link to="/">Profile</Link>
      </li>
      <li className="nav__li">
        <Link to="/donations/map">Donations</Link>
      </li>
      <li className="nav__li">
        <Link to="/login">Log Out</Link>
      </li>
    </ul>
  );
}

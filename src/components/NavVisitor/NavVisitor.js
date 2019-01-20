import React from "react";
import { Link } from "react-router-dom";

export default function NavVisitor(props) {
  return (
    <ul className="nav__ul">
      <li className="nav__li">
        <Link className="nav__link" to="/">
          Home
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
  );
}

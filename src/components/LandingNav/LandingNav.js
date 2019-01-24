import React from "react";
import { Link } from "react-router-dom";
import LoginPath from "../LoginPath/LoginPath";
import "./LandingNav.css";

export default function LandingNav(props) {
  return (
    <div className="landing__top">
      <Link className="landing__link" to="/">
        <h1 className="landing__h1">Meal Revival</h1>
      </Link>
      <div>
        <LoginPath />
      </div>
    </div>
  );
}

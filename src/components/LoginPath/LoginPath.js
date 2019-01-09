import React from "react";
import { Link } from "react-router-dom";
import "./LoginPath.css";

export default function LoginPath(props) {
  return (
    <Link className="link login__link" to="/login">
      Login
    </Link>
  );
}

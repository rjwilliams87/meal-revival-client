import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

export default function Login(props) {
  return (
    <div>
      <Link className="link link--green" to="/">
        <h1 className="text--center">Meal Revival</h1>
      </Link>
      <div className="login__container">
        <LoginForm />
        <div className="path__container">
          <p>
            Not a member? <Link to="/register">Sign up here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

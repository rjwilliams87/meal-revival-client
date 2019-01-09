import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Login.css";

export default function Login(props) {
  return (
    <div>
      <Link className="link link--green" to="/">
        <h1 className="text--center">Meal Revival</h1>
      </Link>
      <div className="login__container">
        <form className="login-form container--green">
          <fieldset className="login-form__fieldset">
            <legend className="login-form__legend">Login</legend>
            <div className="login-form__sec">
              <label htmlFor="login-username" className="login-form__label">
                Username
              </label>
              <input
                id="login-username"
                type="text"
                className="login-form__input"
              />
            </div>
            <div className="login-form__sec login-form__padding">
              <label htmlFor="login-password" className="login-form__label">
                Password
              </label>
              <input
                id="login-password"
                className="login-form__input"
                type="password"
              />
            </div>
          </fieldset>
        </form>
        <div className="path__container">
          <p>
            Not a member? <Link to="/register">Sign up here!</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

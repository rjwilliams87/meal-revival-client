import React from "react";
import "./RegisterForm.css";

export default function RegisterForm(props) {
  return (
    <form className="register-form">
      <fieldset className="register-form__fieldset">
        <legend className="register-form__legend">
          Sign up for your free account
        </legend>
        <div className="register-form__row">
          <div className="register-form__sec">
            <label className="register-form__label">email</label>
            <input className="register-form__input" type="text" />
          </div>
          <div className="register-form__sec">
            <label className="register-form__label">password</label>
            <input className="register-form__input" type="password" />
          </div>
        </div>
        <div className="register-form__row">
          <div className="register-form__sec">
            <label className="register-form__label">company name</label>
            <input className="register-form__input" type="password" />
          </div>
          <div className="register-form__sec">
            <label className="register-form__label">contact name</label>
            <input className="register-form__input" type="text" />
          </div>
        </div>
        <div className="register-form__row">
          <div className="register-form__sec">
            <button className="register__btn btn">Create Account</button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

import React from "react";
import LoginPath from "../LoginPath/LoginPath";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./Register.css";

export default function Register(props) {
  return (
    <div className="register">
      <div className="register__container container--green">
        <div className="register__top">
          <h1>Meal Revival</h1>
          <div>
            <LoginPath />
          </div>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

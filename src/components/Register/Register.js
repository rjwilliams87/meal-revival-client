import React from "react";
import LoginPath from "../LoginPath/LoginPath";
import RegisterForm from "../RegisterForm/RegisterForm";
import LandingNav from "../LandingNav/LandingNav";

import "./Register.css";

export default function Register(props) {
  return (
    <div className="register">
      <div className="register__container container--green">
        <LandingNav />
        <RegisterForm />
      </div>
    </div>
  );
}

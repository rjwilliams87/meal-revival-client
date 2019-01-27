import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import LandingNav from "../LandingNav/LandingNav";
import { connect } from "react-redux";

import "./Register.css";

export class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <div className="register__container container--blue">
          <LandingNav />
          <RegisterForm registerError={this.props.error} />
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => ({
  error: state.app.error
});

export default connect(mapPropsToState)(Register);

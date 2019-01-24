import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.css";

export class Login extends React.Component {
  render() {
    if (
      this.props.loggedIn &&
      this.props.user !== null &&
      this.props.user !== undefined &&
      this.props.user.id !== null &&
      this.props.user.id !== undefined
    ) {
      return <Redirect to={`/dashboard/${this.props.user.id}`} />;
    }
    return (
      <div className="white">
        <Link className="link link--green" to="/">
          <h1 className="text--center login__header">Meal Revival</h1>
        </Link>
        <div className="login__container">
          <LoginForm loginError={this.props.error} />
          <div className="path__container">
            <p>
              Not a member? <Link to="/register">Sign up here!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser,
    error: state.auth.error
  };
};

export default connect(mapPropsToState)(Login);

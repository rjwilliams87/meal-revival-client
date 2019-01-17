import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  render() {
    console.log(this.props.loggedIn);
    console.log(this.props.user);
    if (
      this.props.loggedIn &&
      this.props.user !== null &&
      this.props.user !== undefined &&
      this.props.user.id !== null &&
      this.props.user.id !== undefined
    ) {
      console.log(this.props.user.id);
      return <Redirect to={`/profile/${this.props.user.id}`} />;
    }
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
}

const mapPropsToState = state => {
  console.log("login state");
  console.log(state);
  return {
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser
  };
};

export default connect(mapPropsToState)(Login);

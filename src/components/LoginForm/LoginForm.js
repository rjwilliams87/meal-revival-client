import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import Input from "../Input/Input";
import { required, nonEmpty } from "../../validators";
import { userLogin } from "../../actions/auth";
import "./LoginForm.css";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.props.dispatch(userLogin("demo@email.com", "password123"));
  }

  onSubmit(values) {
    this.props.dispatch(userLogin(values.email, values.password)).catch();
    this.props.dispatch(reset("loginUser"));
  }

  render() {
    let error;
    if (this.props.loginError) {
      error = (
        <div className="login__error" aria-live="polite">
          {this.props.loginError}
        </div>
      );
    }
    return (
      <form
        className="login-form container--blue"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset className="login-form__fieldset">
          <legend className="login-form__legend">Login</legend>
          {error}
          <div className="login-form__sec">
            <Field
              className="login-form__input"
              label="email"
              labelClass="login-form__label"
              name="email"
              type="text"
              component={Input}
              validate={[required, nonEmpty]}
            />
          </div>
          <div className="login-form__sec login-form__padding">
            <Field
              className="login-form__input"
              label="password"
              labelClass="login-form__label"
              name="password"
              type="password"
              component={Input}
              validate={[required, nonEmpty]}
            />
          </div>
          <div className="login-btn__container">
            <button
              className="login__btn btn--red"
              disabled={this.props.pristine || this.props.submitting}
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="demo__container">
            <p onClick={this.demoLogin} className="demo-info">
              Click here for a demo
            </p>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginUser"
})(LoginForm);

import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "../Input/Input";
import { required, nonEmpty } from "../../validators";
import { userLogin } from "../../actions/auth";
import "./LoginForm.css";

class LoginForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(userLogin(values.email, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form__error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form container--green"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <fieldset className="login-form__fieldset">
          <legend className="login-form__legend">Login</legend>
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
              label="Password"
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
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginUser"
})(LoginForm);

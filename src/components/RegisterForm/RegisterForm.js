import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import Input from "../Input/Input";
import { required, nonEmpty, email, isTrimmed, length } from "../../validators";
import "./RegisterForm.css";
import { createNewUser } from "../../actions/postRequest";
import { userLogin } from "../../actions/auth";
const passwordLength = length({ min: 10, max: 72 });

class RegisterForm extends React.Component {
  onSubmit(values) {
    const { email, password, companyName, contactName } = values;
    const user = { email, password, companyName, contactName };
    return this.props
      .dispatch(createNewUser(user))
      .then(() => this.props.dispatch(userLogin(email, password)));
  }
  render() {
    return (
      <form
        className="register-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset className="register-form__fieldset">
          <legend className="register-form__legend">
            Sign up for your free account
          </legend>
          <div className="register-form__row">
            <div className="register-form__sec">
              <Field
                className="register-form__input"
                label="email"
                labelClass="register-form__label"
                name="email"
                type="text"
                component={Input}
                validate={[required, nonEmpty, email]}
              />
            </div>
            <div className="register-form__sec">
              <Field
                className="register-form__input"
                label="password"
                labelClass="register-form__label"
                name="password"
                type="password"
                component={Input}
                validate={[required, nonEmpty, isTrimmed, passwordLength]}
              />
            </div>
          </div>
          <div className="register-form__row">
            <div className="register-form__sec">
              <Field
                className="register-form__input"
                label="company name"
                labelClass="register-form__label"
                name="companyName"
                type="text"
                component={Input}
                validate={[required, nonEmpty]}
              />
            </div>
            <div className="register-form__sec">
              <Field
                className="register-form__input"
                label="contact name"
                labelClass="register-form__label"
                name="contactName"
                component={Input}
                validate={[required, nonEmpty]}
              />
            </div>
          </div>
          <div className="register-form__row">
            <div className="register-form__sec">
              <button
                className="register__btn btn"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Create Account
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: "createUser"
})(RegisterForm);

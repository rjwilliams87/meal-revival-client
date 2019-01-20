import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { required, nonEmpty, email, isTrimmed, length } from "../../validators";
import "./RegisterForm.css";
import { createNewUser } from "../../actions/postActions";
import axios from "axios";
const passwordLength = length({ min: 10, max: 72 });
const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      query: ""
    };

    this.onQuery = this.onQuery.bind(this);
  }
  getInitialState() {
    this.setState({
      address: "",
      query: ""
    });
  }

  onQuery(e) {
    const query = e.target.value;
    if (!query.length > 0) {
      this.setState(this.getInitialState());
    }

    axios
      .get("https://autocomplete.geocoder.api.here.com/6.2/suggest.json", {
        params: {
          app_id: HERE_APP_ID,
          app_code: HERE_APP_CODE,
          query: query,
          maxresults: 3
        }
      })
      .then(response => {
        if (response.data.suggestions.length > 0) {
          this.setState({
            address: response.data.suggestions[0],
            query: query
          });
        } else {
          this.setState(this.getInitialState());
        }
      })
      .catch(err => {
        this.setState(this.getInitialState());
      });
  }

  onSubmit(values) {
    const { email, password } = values;
    const {
      houseNumber,
      street,
      city,
      state,
      postalCode
    } = this.state.address.address;
    const searchText = `${houseNumber} ${street} ${city}, ${state} ${postalCode}`;
    axios
      .get("https://geocoder.api.here.com/6.2/geocode.json", {
        params: {
          app_id: HERE_APP_ID,
          app_code: HERE_APP_CODE,
          searchText: searchText
        }
      })
      .then(res => {
        const coords =
          res.data.Response.View[0].Result[0].Location.DisplayPosition;
        const user = { email, password, address: searchText, coords };
        return user;
      })
      .then(user => this.props.dispatch(createNewUser(user)))
      .catch(err => this.setState(this.getInitialState()));
  }

  render() {
    console.log(this.state.options);
    let places;
    if (this.state.options) {
      places = this.state.options.map((option, index) => (
        <li className="results__li" key={index}>
          <button className="results__btn" onClick={this.handleClick}>
            {option.address.houseNumber ? option.address.houseNumber : null}{" "}
            {option.address.street} {option.address.city},{" "}
            {option.address.state} {option.address.postalCode}{" "}
            {option.countryCode}
          </button>
        </li>
      ));
    }

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = successMessage = (
        <div>
          <h2>Success!</h2>
          <Link to="/login">Login Here!</Link>
        </div>
      );
      return successMessage;
    }
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
          </div>
          <div className="register-form__row">
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
          {/* <div className="register-form__row">
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
          </div> */}
          <div className="register-form__row flex--column">
            <div className="register-form__sec">
              {/* {this.state.query.length !== 0 && !this.state.coords ? (
                <ul className="places__container">{places}</ul>
              ) : null} */}
              <Field
                className="register-form__input register-form__input--lrg"
                label="Address"
                labelClass="register-form__label"
                name="address"
                type="text"
                component={Input}
                validate={[required]}
                value={this.state.query}
                onChange={this.onQuery}
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

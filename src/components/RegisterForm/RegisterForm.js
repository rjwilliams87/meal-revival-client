import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { required, nonEmpty, email, isTrimmed, length } from "../../validators";
import "./RegisterForm.css";
import { createNewUser } from "../../actions/postActions";
import axios from "axios";
const passwordLength = length({ min: 8, max: 72 });
const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.onQuery = this.onQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getInitialState() {
    this.setState({
      query: ""
    });
  }
  //sets query value and makes ajax call on that value
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
            options: response.data.suggestions,
            query: query,
            error: null
          });
        } else {
          this.setState({
            error: "Not valid"
          });
        }
      })
      .catch(err => {
        this.setState(this.getInitialState());
      });
  }

  handleClick(e) {
    e.preventDefault();
    const text = e.target.textContent.toString();
    this.setState({
      query: text,
      options: null,
      error: null
    });
  }

  onSubmit(values) {
    if (!this.state.address) {
      this.setState({ error: "Required" });
    } else {
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
        .then(() => this.setState({ success: true }))
        .catch(err => {
          this.setState(this.getInitialState());
        });
    }
  }

  render() {
    let places;
    if (this.state.options) {
      places = this.state.options.map((option, index) => (
        <li className="options__li" key={index}>
          <button className="options__btn" onClick={this.handleClick}>
            {option.address.houseNumber ? option.address.houseNumber : null}{" "}
            {option.address.street} {option.address.city},{" "}
            {option.address.state} {option.address.postalCode}{" "}
            {option.countryCode}
          </button>
        </li>
      ));
    }

    let successMessage;
    if (!this.props.registerError && this.state.success) {
      successMessage = successMessage = (
        <div className="msg__container">
          <h2 className="msg__header">Welcome to Meal Revival!</h2>
          <Link className="msg__link" to="/login">
            Login Here
          </Link>
        </div>
      );
      return successMessage;
    }

    let error;
    if (this.props.registerError) {
      error = (
        <div className="register__error" aria-live="polite">
          {this.props.registerError}
        </div>
      );
    }
    let addressError;
    if (this.state.error) {
      addressError = (
        <div className="form__error" aria-live="polite">
          {this.state.error}
        </div>
      );
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
          {successMessage}
          <div className="register-form__row flex--column">
            {error}
            <div className="register-form__sec">
              <Field
                aria-label="enter email address"
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
          <div className="register-form__row flex--column">
            <div className="register-form__sec">
              <Field
                aria-label="enter a password with at least 8 characters and no white space"
                className="register-form__input"
                label="password *"
                labelClass="register-form__label"
                name="password"
                type="password"
                component={Input}
                validate={[required, nonEmpty, isTrimmed, passwordLength]}
              />
              <p className="register__p">* min 8 characters</p>
            </div>
          </div>
          <div className="register-form__row flex--column position-rel">
            <div className="register-form__sec">
              <div className="error__container">
                <label htmlFor="address" className="register-form__label">
                  address
                </label>
                {addressError}
              </div>
              <input
                aria-label="enter your address you do not have to select one of the options that will be listed"
                id="address"
                type="text"
                className="register-form__input register-form__input--lrg"
                onChange={this.onQuery}
                value={this.state.query}
              />
            </div>
          </div>
          <div className="register-form__row flex--column">
            <div className="register-form__sec">
              <button
                className="register__btn btn btn--red"
                type="submit"
                disabled={this.props.submitting || this.state.error}
              >
                Create Account
              </button>
            </div>
          </div>
        </fieldset>
        {this.state.query.length !== 0 && !this.state.coords ? (
          <ul aria-live="polite" className="options__container">
            {places}
          </ul>
        ) : null}
      </form>
    );
  }
}

export default reduxForm({
  form: "createUser"
})(RegisterForm);

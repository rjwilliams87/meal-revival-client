import React from "react";
import axios from "axios";
import Geosearch from "../Geosearch/Geosearch";
import "./ProfileForm.css";

const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      query: ""
    };

    this.onQuery = this.onQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
          console.log(response.data.suggestions);
          this.setState({
            options: response.data.suggestions,
            query: query
          });
        } else {
          this.setState(this.getInitialState());
        }
      })
      .catch(err => {
        console.error(err);
        this.setState(this.getInitialState());
      });
  }

  handleClick(e) {
    e.preventDefault();
    const text = e.target.textContent.toString();
    // console.log(e.target.textContent);
    axios
      .get("https://geocoder.api.here.com/6.2/geocode.json", {
        params: {
          app_id: HERE_APP_ID,
          app_code: HERE_APP_CODE,
          searchText: text
        }
      })
      .then(result => {
        const coords =
          result.data.Response.View[0].Result[0].Location.DisplayPosition;

        this.setState({ query: text });
      });
  }
  render() {
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
    return (
      <div className="profile-form__container">
        <h2 className="profile-form__header">Finish setting up your profile</h2>
        <p className="profile-form__p">
          This makes it easier for us to list your donations!
        </p>
        <form className="profile-form">
          <div>
            <label className="profile-form__label">Address</label>
            <input
              className="profile-form__input"
              type="text"
              value={this.state.query}
              onChange={this.onQuery}
            />
            {this.state.query.length !== 0 ? (
              <ul className="places__container">{places}</ul>
            ) : null}
          </div>
          <div>
            <label className="profile-form__label">Phone</label>
            <input className="profile-form__input" type="phone" />
          </div>
          <div>
            <label className="profile-form__label">
              Brief description your organization
            </label>
            <input className="profile-form__input input--lrg" type="text" />
          </div>
          <button className="btn--red add__btn btn--margin" type="submit">
            Complete
          </button>
        </form>
      </div>
    );
  }
}

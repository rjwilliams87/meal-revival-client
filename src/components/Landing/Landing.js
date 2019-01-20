import React from "react";
import { connect } from "react-redux";
import { changeCoords } from "../../actions/sync";
import Geosearch from "../Geosearch/Geosearch";
import InfoSection from "../InfoSection/InfoSection";
import LoginPath from "../LoginPath/LoginPath";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { getLocationSuggestions } from "../../HEREutils";
import "./Landing.css";

const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

class Landing extends React.Component {
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

        this.props.dispatch(changeCoords(coords));
        this.setState({ query: text });
      });
  }

  render() {
    let places;
    if (this.state.options) {
      places = this.state.options.map((option, index) => (
        <li className="results__li" key={index}>
          <button className="results__btn" onClick={this.handleClick}>
            {option.address.city}, {option.address.state}{" "}
            {option.address.postalCode} {option.countryCode}
          </button>
        </li>
      ));
    }
    if (this.props.loggedIn) {
      return <Redirect to={`/dashboard/${this.props.id}`} />;
    }
    return (
      <div>
        <div className="landing__container wave">
          <LoginPath />
          <h1 className="landing__header landing__header--margin">
            Meal Revival
          </h1>
          <h2 className="landing__header header--margin header--bold header--large">
            Help feed those in need!
          </h2>
          <h3 className="landing__header header--light header--med">
            Explore donations from local restaurants
          </h3>
          <form className="landing__form" onSubmit={this.handleSubmit}>
            <Geosearch
              onChange={this.onQuery}
              query={this.state.query}
              placeholder={"Enter City"}
              btnText={"Search"}
            />
            {this.state.query.length !== 0 ? (
              <ul className="results__container">{places}</ul>
            ) : (
              <p className="form__p">
                Search your city for free food donations.
              </p>
            )}
          </form>
        </div>
        <InfoSection />
        <div className="section__container flex--column section--sm section--margin">
          <p className="p--bold p--lrg">Want to list your donations?</p>
          <Link to="/register">
            <button className="join__btn search__btn search__btn--border">
              Join Here
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(Landing);

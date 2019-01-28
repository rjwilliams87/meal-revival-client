import React from "react";
import { connect } from "react-redux";
import { changeCoords } from "../../actions/sync";
import Geosearch from "../Geosearch/Geosearch";
import InfoSection from "../InfoSection/InfoSection";
import LandingNav from "../LandingNav/LandingNav";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./Landing.css";

const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Kansas City, MO",
      query: "",
      error: null
    };

    this.onQuery = this.onQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getInitialState() {
    this.setState({
      address: "Kansas City, MO",
      query: "",
      error: null
    });
  }

  //checks the input value against res for possible
  //locations and sets state
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
            query: query,
            address: response.data.suggestions[0],
            error: null
          });
        } else {
          //user inputing but no valid res avaliable
          this.setState({
            error: "Not a valid address"
          });
        }
      })
      .catch(() => {
        this.getInitialState();
      });
  }

  handleClick(e) {
    e.preventDefault();
    const text = e.target.textContent;
    this.setState({
      query: text,
      address: text,
      options: null
    });
  }

  //gets geocoords needs
  //ajax inside component
  //no need to keep in redux store
  handleSubmit() {
    let searchText;
    if (typeof this.state.address === "object") {
      //user typed put didn't select from options
      const { city, state } = this.state.address.address;
      searchText = `${city}, ${state}`;
    } else {
      // user didn't input anything so use default state
      searchText = this.state.address;
    }
    axios
      .get("https://geocoder.api.here.com/6.2/geocode.json", {
        params: {
          app_id: HERE_APP_ID,
          app_code: HERE_APP_CODE,
          searchText
        }
      })
      .then(result => {
        const coords =
          result.data.Response.View[0].Result[0].Location.DisplayPosition;

        this.props.dispatch(changeCoords(coords));
      })
      .catch(err => console.error(err));
  }

  render() {
    //city options dropdown if exist in state from ajax call
    let places;
    if (this.state.options) {
      places = this.state.options.map(option => (
        <li className="results__li" key={option.address.locationId}>
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
          <LandingNav />
          <h2 className="landing__header header--margin header--bold header--large">
            Help feed those in need!
          </h2>
          <h3 className="landing__header header--light header--med">
            Explore donations from local restaurants
          </h3>
          <form className="landing__form">
            <Geosearch
              error={this.state.error}
              onClick={this.handleSubmit}
              onChange={this.onQuery}
              query={this.state.query}
              placeholder="Kansas City, MO USA"
              btnText="Search"
            />
            {this.state.query.length !== 0 ? (
              <ul aria-live="assertive" className="results__container">
                {places}
              </ul>
            ) : (
              <p className="form__p">
                Select a city to explore free food donations.
              </p>
            )}
          </form>
          <div className="icon__wrapper">
            <span className="icon--arrow">
              <a
                aria-label="click to scroll to info section"
                href="#scroll--target"
                className="icon__anchor"
              >
                <i className="fas fa-angle-down fa-4x" />
              </a>
            </span>
          </div>
        </div>
        <section>
          <InfoSection />
        </section>
        <div className="section__container flex--column section--sm section--margin">
          <p className="p--bold p--lrg">Want to list your donations?</p>
          <Link to="/register">
            <button
              aria-label="click to sign up"
              className="join__btn btn--red"
            >
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

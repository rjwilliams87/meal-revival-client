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

  //checks the input value against api for possible
  //locations and sets state and input.value to query
  //also creates list of options user can click on
  //to set their targeted city/coords
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
            address: response.data.suggestions[0]
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

  //gets geocoords needs to be updated to allow user the
  //option of not clicking on one of btns but just inputing address
  //all here api calls in app are done inside component
  //no need to keep this values in app state/redux store
  handleClick(e) {
    e.preventDefault();
    const text = e.target.textContent;
    console.log(text);
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
        this.setState({ query: text, options: null });
      });
  }

  render() {
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
          <form className="landing__form" onSubmit={this.handleSubmit}>
            <Geosearch
              // onClick={this.handleClick}
              onChange={this.onQuery}
              query={this.state.query}
              placeholder={"Kansas City, MO USA"}
              btnText={"Search"}
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
                <i class="fas fa-angle-down fa-4x" />
              </a>
            </span>
          </div>
        </div>
        <InfoSection />
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

import React, { Component } from "react";
import AddressSuggest from "./AddressSuggest";
import AddressInput from "./AddressInput";
import axios from "axios";

const APP_ID_HERE = process.env.REACT_APP_HEREAPPID;
const APP_CODE_HERE = process.env.REACT_APP_HEREAPPCODE;

export default class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    // User has entered something in the address bar
    this.onQuery = this.onQuery.bind(this);
    // User has entered something in an address field
    this.onAddressChange = this.onAddressChange.bind(this);
    // User has clicked the check button
    this.onCheck = this.onCheck.bind(this);
    // User has clicked the clear button
    this.onClear = this.onClear.bind(this);
  }

  onQuery(e) {
    const query = e.target.value;

    if (!query.length > 0) {
      this.setState(this.getInitialState());
      return;
    }

    const self = this;
    axios
      .get("https://autocomplete.geocoder.api.here.com/6.2/suggest.json", {
        params: {
          app_id: APP_ID_HERE,
          app_code: APP_CODE_HERE,
          query: query,
          maxresults: 5
        }
      })
      .then(function(response) {
        console.log(response.data);
        if (response.data.suggestions.length > 0) {
          const id = response.data.suggestions[0].locationId;
          const address = response.data.suggestions[0].address;
          self.setState({
            address: address,
            query: query,
            locationId: id,
            options: response.data
          });
        } else {
          const state = self.getInitialState();
          self.setState(state);
        }
      });
  }

  getInitialState() {
    return {
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
      },
      query: "",
      options: "",
      locationId: "",
      isChecked: false,
      coords: {}
    };
  }

  onClear(e) {
    const state = this.getInitialState();
    this.setState(state);
  }

  onAddressChange(e) {
    const id = e.target.id;
    const val = e.target.value;

    let state = this.state;
    state.address[id] = val;
    this.setState(state);
  }

  onCheck(e) {
    let params = {
      app_id: APP_ID_HERE,
      app_code: APP_CODE_HERE
    };

    if (this.state.locationId.length > 0) {
      params["locationId"] = this.state.locationId;
    } else {
      params["searchtext"] =
        this.state.address.street +
        this.state.address.city +
        this.state.address.state +
        this.state.address.postalCode +
        this.state.address.country;
    }

    const self = this;
    axios
      .get("https://geocoder.api.here.com/6.2/geocode.json", { params: params })
      .then(function(response) {
        const view = response.data.Response.View;
        if (view.length > 0 && view[0].Result.length > 0) {
          const location = view[0].Result[0].Location;

          self.setState({
            isChecked: "true",
            locationId: "",
            query: location.Address.Label,
            address: {
              street:
                location.Address.HouseNumber + " " + location.Address.Street,
              city: location.Address.City,
              state: location.Address.State,
              postalCode: location.Address.PostalCode,
              country: location.Address.Country
            },
            coords: {
              lat: location.DisplayPosition.Latitude,
              lon: location.DisplayPosition.Longitude
            }
          });
        } else {
          self.setState({
            isChecked: true,
            coords: null
          });
        }
      })
      .catch(function(error) {
        console.log("caught failed query");
        self.setState({
          isChecked: true,
          coords: null
        });
      });
  }

  alert() {
    if (!this.state.isChecked) {
      return;
    }

    if (this.state.coords === null) {
      return (
        <div className="alert alert-warning" role="alert">
          <b>Invalid.</b> The address is not recognized.
        </div>
      );
    } else {
      return (
        <div className="alert alert-success" role="alert">
          <b>Valid Address.</b> Location is {this.state.coords.lat},{" "}
          {this.state.coords.lon}.
        </div>
      );
    }
  }

  render() {
    let result = this.alert();
    let options;
    if (this.state.options.suggestions) {
      options = this.state.options.suggestions.map((option, index) => (
        <li key={index}>{option.address}</li>
      ));
    }
    return (
      <div className="container">
        <AddressSuggest query={this.state.query} onChange={this.onQuery} />
        <div className="options">
          {!options === undefined ? <ul>{options}</ul> : <ul />}
        </div>
        <AddressInput
          street={this.state.address.street}
          city={this.state.address.city}
          state={this.state.address.state}
          postalCode={this.state.address.postalCode}
          country={this.state.address.country}
          onChange={this.onAddressChange}
        />
        <br />
        {result}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onCheck}
        >
          Check
        </button>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={this.onClear}
        >
          Clear
        </button>
      </div>
    );
  }
}
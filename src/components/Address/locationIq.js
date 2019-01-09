import React from "react";
import AddressForm from "./AddressForm";

const key = process.env.LOCATIONIQ_KEY;

const settings = {
  async: true,
  crossDomain: true,
  url: `https://us1.locationiq.com/v1/search.php?key=${key}&q=Empire%20State%20Building&format=json`,
  method: "GET"
};

export default class LocationIQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit() {
    fetch(settings).then(data => {
      if (data.length !== 1) {
        this.setState({ error: true });
      } else {
        this.setState({
          lat: data.lat,
          lng: data.lon,
          address: data.display_name
        });
      }
    });
  }
  render() {
    return <AddressForm onSubmit={this.handleSubmit} />;
  }
}

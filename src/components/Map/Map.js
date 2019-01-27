import React from "react";
import Nav from "../Nav/Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import GeoSearchBar from "../GeoSearchBar/GeoSearchBar";
import { getAllDonations } from "../../actions/getActions";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
export class Map extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllDonations());
  }
  clearAuth() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    const positionX = [this.props.lat, this.props.lng];
    let markers;
    if (this.props.donations !== null) {
      markers = this.props.donations.map((donation, id) => (
        <Marker
          position={[donation.coords.Latitude, donation.coords.Longitude]}
          key={donation.id}
        >
          <Popup>
            Expires: {donation.expiry.replace(/T.*$/, "")} <br />
            Info: {donation.info} <br />
            <Link to={`/profile/${donation.userId}`}>View Company Profile</Link>
          </Popup>
        </Marker>
      ));
    }
    return (
      <div>
        <Nav
          loggedIn={this.props.loggedIn}
          clearAuth={() => this.clearAuth()}
        />
        <LeafletMap center={positionX} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {markers !== null ? markers : null}
          <GeoSearchBar />
        </LeafletMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.app.donations
});

export default connect(mapStateToProps)(Map);

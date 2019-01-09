import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import GeoSearchBar from "../GeoSearchBar/GeoSearchBar";

class Map extends React.Component {
  //there will be an async action to get the donation info
  render() {
    const positionX = [this.props.lat, this.props.lng];
    const markers = this.props.donations.map((donation, id) => (
      <Marker
        position={[donation.coords.lat, donation.coords.lng]}
        key={donation.id}
      >
        <Popup>
          {donation.company} <br />
          Expires: {donation.expiry} <br />
          Info: {donation.info} <br />
          <Link to={`/profile/${donation.userId}`}>View Company Profile</Link>
        </Popup>
      </Marker>
    ));
    return (
      <LeafletMap center={positionX} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {markers}
        <GeoSearchBar />
      </LeafletMap>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations
});

export default connect(mapStateToProps)(Map);

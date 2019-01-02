import React from 'react';
import {Link} from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 39.0997,
      lng: -94.5786,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const positionX = [38.9517, -92.3341];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={positionX}>
          <Popup>
            Restaurant Awesome <br />
            Donation Avaliable until: 1/2/2019 <br/> Delivery Avaliable: No
            <br /> Contact: Kim 816-333-1234 <br />
            <Link to="/dashboard/1">View Company Profile</Link>
          </Popup>
        </Marker>
            <Marker position={position}>
                <Popup>
                    Restaurant Greatness <br />
                    Info: 10lbs leftover chicken and rice <br />
                    Avaliable until: 1/4/2019 <br />
                    Delivery Avaliable: Yes <br />
                    Contact: restaurant@greatness.Company <br />
                <Link to="/dashboard/1">View Company Profile</Link>
                </Popup>
            </Marker>
      </LeafletMap>
    );
  }
}
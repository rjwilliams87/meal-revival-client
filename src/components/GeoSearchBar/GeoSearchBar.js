import React from "react";
import { MapControl, withLeaflet } from "react-leaflet";
// import L from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

class GeoSearchBar extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: "bar",
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: "search"
    });
  }
}

export default withLeaflet(GeoSearchBar);

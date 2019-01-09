import React from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default function Search(props) {
  const textInput = React.createRef();
  function handleSubmit() {
    const provider = new OpenStreetMapProvider();
    provider.search({ query: textInput.value }).then(result => {
      console.log(result);
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <input ref={textInput} type="text" />
        <button type="Submit">Search</button>
        <h2>Locations:</h2>
      </form>
    </div>
  );
}

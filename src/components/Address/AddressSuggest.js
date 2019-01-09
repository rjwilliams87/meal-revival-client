import React from "react";
import AddressItem from "./AddressItem";

export default class AddressSuggest extends React.Component {
  render() {
    return (
      <AddressItem
        label="Addres"
        value={this.props.query}
        onChange={this.props.onChange}
        placeholder="start typing"
      />
    );
  }
}

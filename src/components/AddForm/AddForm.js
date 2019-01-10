import React from "react";
// the submit for the form will be as follows
// onSubmit={this.props.dispatch(addDonation)}
export default function AddForm(props) {
  return (
    <form className="add-form">
      <label>Expires On</label>
      <input type="date" />
      <label>Info</label>
      <input type="text" />
      <label>Delivery</label>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
}

import React from "react";

export default function AddForm(props) {
  return (
    <form>
      <label>Expires On</label>
      <input type="date" />
      <label>Info</label>
      <input type="text" />
      <label>Delivery</label>
      <input type="text" />
    </form>
  );
}

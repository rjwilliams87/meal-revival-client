import React from "react";
import "./AddForm.css";
// the submit for the form will be as follows
// onSubmit={this.props.dispatch(addDonation)}
export default function AddForm(props) {
  return (
    <div className="add-form__container">
      <form className="add-form">
        <legend className="add-form__legend">New Donation</legend>
        <label className="add-form__label">Expires On</label>
        <input className="add-form__input" type="date" />
        <label className="add-form__label">Info</label>
        <input className="add-form__input" type="text" />
        <label className="add-form__label">Can you deliver?</label>
        <div>
          <input
            className="add-form__radio"
            type="radio"
            name="delivery"
            value="Yes"
            checked
          />
          Yes
          <input
            className="add-form__radio"
            type="radio"
            name="delivery"
            value="No"
          />
          No
        </div>
        <button className="btn--red add-form__btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

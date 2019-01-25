import React from "react";
import "./AddForm.css";
import { reduxForm, Field } from "redux-form";
import { required, nonEmpty } from "../../validators";
import Input from "../Input/Input";
import { addUserDonation } from "../../actions/postActions";
import { reset } from "redux-form";

export class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false
    };
  }

  onSubmit = async values => {
    const { expiry, info, delivery } = values;
    await this.props.dispatch(addUserDonation(expiry, info, delivery));
    await this.props.dispatch(reset("addDonation"));
    this.props.updateDonations();
  };
  render() {
    return (
      <div className="add-form__container">
        <form
          className="add-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <legend className="add-form__legend">New Donation</legend>
          <Field
            className="add-form__input"
            label="Expires On"
            labelClass="add-form__label"
            name="expiry"
            type="date"
            component={Input}
            validate={[required]}
          />
          <Field
            className="add-form__input"
            label="Info"
            labelClass="add-form__label"
            name="info"
            type="text"
            placeholder="10lbs chicken and rice"
            maxLength="25"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <label className="add-form__label">Can you deliver?</label>
          <div>
            <label>
              <Field
                className="add-form__radio"
                type="radio"
                name="delivery"
                value="Yes"
                component="input"
                checked
              />
              Yes
            </label>
            <label>
              <Field
                className="add-form__radio radio--margin"
                type="radio"
                name="delivery"
                value="No"
                component="input"
              />
              No
            </label>
          </div>
          <button
            className="btn--red add-form__btn"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "addDonation"
})(AddForm);

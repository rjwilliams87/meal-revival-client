import React from "react";
import "./AddForm.css";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import { required, nonEmpty } from "../../validators";
import Input from "../Input/Input";
import { addUserDonation } from "../../actions/postActions";
import { getUserInfo } from "../../actions/getActions";
class AddForm extends React.Component {
  onSubmit(values) {
    const { expiry, info, delivery } = values;
    this.props
      .dispatch(addUserDonation(expiry, info, delivery))
      .then(this.props.dispatch(getUserInfo()));
  }
  render() {
    return (
      <div className="add-form__container">
        <form className="add-form">
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
              />
              Yes
            </label>
            <label>
              <Field
                className="add-form__radio"
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

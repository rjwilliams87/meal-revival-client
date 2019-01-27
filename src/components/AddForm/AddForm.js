import React from "react";
import "./AddForm.css";
import { reduxForm, Field } from "redux-form";
import { required, nonEmpty } from "../../validators";
import Input from "../Input/Input";
import renderDateTimePicker from "../Datepicker/Datepicker";
import { addUserDonation } from "../../actions/postActions";
import { reset } from "redux-form";
import "react-datepicker/dist/react-datepicker.css";

export class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "Yes",
      formDate: new Date()
    };
  }

  handleOptionChange(e) {
    const option = e.target.value;
    this.setState({ option });
  }

  handleDateChange(value) {
    this.setState({
      formDate: value
    });
  }

  onSubmit = async values => {
    let { expiry, info, delivery } = values;
    console.log(expiry.toString());
    if (delivery === undefined) {
      delivery = "Yes";
    }
    await this.props.dispatch(addUserDonation(expiry, info, delivery));
    await this.props.dispatch(reset("addDonation"));
    this.props.updateDonations();
    this.setState({ option: "Yes" });
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
            arial-labelby="expiry"
            name="expiry"
            label="Expires On"
            labelClass="add-form__label"
            labelFor="expiry"
            className="add-form__input"
            component={renderDateTimePicker}
            selected={this.state.formDate}
            value={this.state.formDate}
            type="text"
            onChange={this.handleDateChange.bind(this)}
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
          <div role="group" id="delivery-button">
            <label>
              <Field
                className="add-form__radio"
                type="radio"
                name="delivery"
                value="Yes"
                component="input"
                aria-label="delivery-button Yes"
                onClick={e => this.handleOptionChange(e)}
                checked={this.state.option === "Yes"}
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
                aria-label="delivery-button No"
                onClick={e => this.handleOptionChange(e)}
                checked={this.state.option === "No"}
              />
              No
            </label>
          </div>
          <button
            onClick={reset}
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

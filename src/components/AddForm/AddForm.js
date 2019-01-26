import React from "react";
import "./AddForm.css";
import { reduxForm, Field } from "redux-form";
import { required, nonEmpty } from "../../validators";
import Input from "../Input/Input";
import renderDateTimePicker from "../Datepicker/Datepicker";
import { addUserDonation } from "../../actions/postActions";
import { reset } from "redux-form";
import momentLocalizer from "react-widgets-moment";
import Moment from "moment";
import "react-widgets/dist/css/react-widgets.css";

//localizer for datepicker
Moment.locale("en");
momentLocalizer();

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

  onSubmit = async values => {
    let { expiry, info, delivery } = values;
    if (delivery === undefined) {
      delivery = "Yes";
    }
    await this.props.dispatch(addUserDonation(expiry, info, delivery));
    await this.props.dispatch(reset("addDonation"));
    this.props.updateDonations();
    this.setState({ option: "Yes" });
  };
  render() {
    let error;
    if (!this.state.formDate) {
      error = <div className="form__error">Required</div>;
    }
    return (
      <div className="add-form__container">
        <form
          className="add-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <legend className="add-form__legend">New Donation</legend>
          <div className="error__container">
            <label className="add-form__label" htmlFor="expiry">
              Expires On
            </label>
            {error}
          </div>
          <Field
            name="expiry"
            showTime={false}
            component={renderDateTimePicker}
            onChange={value => this.setState({ formDate: value })}
            validate={[required]}
            require
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
                onClick={e => this.handleOptionChange(e)}
                checked={this.state.option === "No"}
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

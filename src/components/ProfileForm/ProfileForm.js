import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "../Input/Input";
import { normalizePhone } from "../../utils";
import "./ProfileForm.css";
import { completeUserProfile } from "../../actions/putActions";

export class ProfileForm extends React.Component {
  onSubmit = async values => {
    const profileComplete = true;
    const { phone, about, companyName, contactName } = values;
    await this.props.dispatch(
      completeUserProfile(
        phone,
        about,
        companyName,
        contactName,
        profileComplete
      )
    );
    this.props.handleComplete();
  };
  render() {
    // All form fields required for now for simplicity
    // will update to give user option to finish profile
    // at later time
    return (
      <div className="profile-form__container">
        <h2 className="profile-form__header">Finish setting up your profile</h2>
        <p className="profile-form__p">
          This makes it easier for us to list your donations!
        </p>
        <form
          className="profile-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <div>
            {/* <label className="profile-form__label">Company Name</label> */}
            <Field
              label="Company Name"
              labelClass="profile-form__label"
              className="profile-form__input"
              name="companyName"
              type="text"
              component={Input}
              required
            />
          </div>
          <div>
            <label className="profile-form__label">Contact Name</label>
            <Field
              className="profile-form__input"
              name="contactName"
              type="text"
              component="input"
              required
            />
          </div>
          <div>
            <label className="profile-form__label">Phone</label>
            <Field
              className="profile-form__input"
              name="phone"
              placeholder="888-888-8888"
              type="tel"
              component="input"
              normalize={normalizePhone}
              required
            />
          </div>
          <div>
            <label className="profile-form__label">Describe Your Company</label>
            <Field
              className="profile-form__input input--lrg"
              type="text"
              maxLength="420"
              name="about"
              component="textarea"
              required
            />
          </div>
          <button
            disabled={this.props.pristine || this.props.submitting}
            className="btn--red add__btn btn--margin"
            type="submit"
          >
            Complete
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "profileUpdate"
})(ProfileForm);

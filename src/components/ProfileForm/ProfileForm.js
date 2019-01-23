import React from "react";
import { reduxForm, Field, SubmissionError, focus } from "redux-form";
import { length } from "../../validators";
import "./ProfileForm.css";
import { completeUserProfile } from "../../actions/putActions";
const phoneLength = length({ min: 7, max: 10 });

class ProfileForm extends React.Component {
  onSubmit(values) {
    const profileComplete = true;
    console.log("from submit");
    console.log(values);
    const { phone, about, companyName, contactName } = values;
    return this.props
      .dispatch(
        completeUserProfile(
          phone,
          about,
          companyName,
          contactName,
          profileComplete
        )
      )
      .then(window.location.reload());
  }
  render() {
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
            <label className="profile-form__label">Company Name</label>
            <Field
              className="profile-form__input"
              name="companyName"
              type="text"
              component="input"
            />
          </div>
          <div>
            <label className="profile-form__label">Contact Name</label>
            <Field
              className="profile-form__input"
              name="contactName"
              type="text"
              component="input"
            />
          </div>
          <div>
            <label className="profile-form__label">Phone</label>
            <Field
              className="profile-form__input"
              name="phone"
              type="text"
              component="input"
              validators={[phoneLength]}
            />
          </div>
          <div>
            <label className="profile-form__label">
              Brief description your organization
            </label>
            <Field
              className="profile-form__input input--lrg"
              type="text"
              name="about"
              component="textarea"
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

import React from "react";
import "./ProfileTop.css";

export default class ProfileTop extends React.Component {
  render() {
    const {
      address,
      phone,
      email,
      companyName,
      contactName,
      about
    } = this.props.user;
    return (
      <div>
        <div className="company__box">
          <div className="profile-img__container">
            <img
              className="profile-img"
              src="https://propertymarketersllc.com/wp-content/uploads/2018/05/profile-picture-placeholder.png"
            />
            <h2>{companyName}</h2>
          </div>
          <p>{about}</p>
        </div>
        <div className="company-contact__box">
          <p className="contact__p">{address}</p>
          <p className="contact__p">Contact: {contactName}</p>
          <p className="contact__p">{email}</p>
          <p className="contact__p">{phone}</p>
        </div>
      </div>
    );
  }
}

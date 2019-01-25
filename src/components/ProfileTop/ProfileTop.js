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
            {/* ability to add images coming soon */}
            {/* <img
              className="profile-img"
              src="https://propertymarketersllc.com/wp-content/uploads/2018/05/profile-picture-placeholder.png"
            /> */}
            <h2 className="company__header">{companyName}</h2>
          </div>
          <p className="company__p">{about}</p>
        </div>
        <div className="company-contact__box">
          <p className="contact__p">
            <i className="fas fa-map-marker-alt icon__contact" />
            {address}
          </p>
          <p className="contact__p">
            <i className="fas fa-user icon__contact" />
            {contactName}
          </p>
          <p className="contact__p">
            <i className="fas fa-envelope icon__contact" />
            {email}
          </p>
          <p className="contact__p">
            <i className="fas fa-phone icon__contact" />
            {phone}
          </p>
        </div>
      </div>
    );
  }
}

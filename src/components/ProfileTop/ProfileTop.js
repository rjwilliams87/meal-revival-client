import React from "react";
import "./ProfileTop.css";
import LightBox from "lightbox-react";
import "lightbox-react/style.css";
import AddForm from "../AddForm/AddForm";

export default class ProfileTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: true
    });
  }
  render() {
    console.log(this.props);
    const { address, phone, email, companyName, contactName } = this.props.user;
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
          {this.props.loggedIn ? (
            <button onClick={this.handleClick} className="add__btn">
              Add Donation
            </button>
          ) : null}
        </div>
        <div className="company-contact__box">
          <p className="contact__p">{address}</p>
          <p className="contact__p">Contact: {contactName}</p>
          <p className="contact__p">{email}</p>
          <p className="contact__p">{phone}</p>
        </div>
        {this.state.isOpen && (
          <LightBox
            mainSrc={<AddForm id={this.props.id} />}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import "./ProfileTop.css";
import LightBox from "lightbox-react";
import "lightbox-react/style.css";
import AddForm from "../AddForm/AddForm";
// import { getUserInfoSuccess } from "../../actions";

class ProfileTop extends React.Component {
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
    return (
      <div>
        <div className="company__box">
          <div className="profile-img__container">
            <img
              className="profile-img"
              src="https://propertymarketersllc.com/wp-content/uploads/2018/05/profile-picture-placeholder.png"
            />
            <h2>{this.props.organization}</h2>
          </div>
          {this.props.loggedIn ? (
            <button onClick={this.handleClick} className="add__btn">
              Add Donation
            </button>
          ) : null}
        </div>
        <div className="company-contact__box">
          <p className="contact__p">{this.props.address}</p>
          <p className="contact__p">Contact: {this.props.contact}</p>
          <p className="contact__p">{this.props.email}</p>
          <p className="contact__p">{this.props.phone}</p>
        </div>
        {this.state.isOpen && (
          <LightBox
            mainSrc={<AddForm />}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapPropsToState = state => ({
  loggedIn: state.auth.userLoggedIn
});

export default connect(mapPropsToState)(ProfileTop);

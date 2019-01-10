import React from "react";
// import { connect } from "react-redux";
import "./ProfileTop.css";
// import { getUserInfoSuccess } from "../../actions";

export default class ProfileTop extends React.Component {
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
          <button onClick={this.props.onClick} className="add__btn">
            Add Donation
          </button>
        </div>
        <div className="company-contact__box">
          <p className="contact__p">{this.props.address}</p>
          <p className="contact__p">Contact: {this.props.contact}</p>
          <p className="contact__p">{this.props.email}</p>
          <p className="contact__p">{this.props.phone}</p>
        </div>
        {/*<div className="info__conatainer">
          <div className="info__box box-1">
            <div className="box-1__container">
              <p>
                Company ABC is a restaurant specializing in American Cusine. We
                have been in business since 2004. We often do catering events to
                local businesses where we end up with left over food. The food
                needs to be picked up within 24 hours of it being made
                avaliable. Please contact us about for information.
              </p>
            </div>
    </div> 
          <div className="info__box box-2">
            <div className="table__container">
              <h2 className="table__header">Avaliable Donations</h2>
              <table className="table">
                <tr>
                  <th>Expires</th>
                  <th>Info</th>
                  <th>Delivery</th>
                </tr>

                <tr>
                  <td>1-20-2019</td>
                  <td>Sandwhiches and soup</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>1-20-2019</td>
                  <td>Sandwhiches and soup</td>
                  <td>No</td>
                </tr>
              </table>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

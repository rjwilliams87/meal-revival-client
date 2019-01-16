import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileAbout from "../ProfileAbout/ProfileAbout";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import { getUserInfo, getUserDonations } from "../../actions/getActions";
import "./Profile.css";

class Profile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props
      .dispatch(getUserInfo(id))
      .then(this.props.dispatch(getUserDonations(id)))
      .then(console.log("dispatch ran"));
  }
  render() {
    if (this.props.loggedIn && !this.props.user.profileComplete) {
      return (
        <div>
          <Nav />
          <ProfileForm />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          {this.props.user && this.props.donations && (
            <div>
              <ProfileTop user={this.props.user} />
              <div className="info__container">
                <ProfileAbout user={this.props.user} />
                <ProfileTable
                  loggedIn={this.props.loggedIn}
                  donations={this.props.donations}
                />
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

const mapPropsToState = state => {
  console.log("Profile.js state");
  console.log(state);
  return {
    user: state.app.user,
    loggedIn: state.auth.userLoggedIn,
    donations: state.app.userDonations
  };
};

export default connect(mapPropsToState)(Profile);

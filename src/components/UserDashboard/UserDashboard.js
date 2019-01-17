import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileAbout from "../ProfileAbout/ProfileAbout";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import { getUserInfo, getUserDonations } from "../../actions/getActions";

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.auth) {
      const id = this.props.auth.id;
      this.props
        .dispatch(getUserInfo(id))
        .then(this.props.dispatch(getUserDonations(id)))
        .then(console.log("dispatch ran"));
    }
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    if (this.props.loggedIn && !this.props.auth.profileComplete) {
      return (
        <div>
          <Nav loggedIn={this.props.loggedIn} />
          <ProfileForm />
        </div>
      );
    } else {
      return (
        <div>
          <Nav loggedIn={this.props.loggedIn} />
          <h1>this is fucked</h1>
          {this.props.user && this.props.donations && (
            <div>
              <ProfileTop
                id={this.props.auth.id}
                user={this.props.user}
                loggedIn={this.props.loggedIn}
              />
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
  return {
    loggedIn: state.auth.loggedIn,
    user: state.app.user,
    donations: state.app.userDonations,
    auth: state.auth.currentUser
  };
};

export default connect(mapPropsToState)(Profile);

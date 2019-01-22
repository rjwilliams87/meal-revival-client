import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import AddForm from "../AddForm/AddForm";
import { getUserInfo, getUserDonations } from "../../actions/getActions";

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.auth) {
      const id = this.props.auth.id;
      this.props
        .dispatch(getUserInfo(id))
        .then(this.props.dispatch(getUserDonations(id)));
    }
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    if (!this.props.user) {
      return <div />;
    }
    if (this.props.loggedIn && !this.props.user.profileComplete) {
      return (
        <div className="grey">
          <Nav loggedIn={this.props.loggedIn} />
          <ProfileForm />
        </div>
      );
    } else {
      return (
        <div className="grey">
          <Nav loggedIn={this.props.loggedIn} />
          {this.props.user && this.props.donations && (
            <div className="top__wrapper">
              <ProfileTop
                id={this.props.auth.id}
                user={this.props.user}
                loggedIn={this.props.loggedIn}
              />
              <div className="donation__sec">
                <div className="box--sm">
                  <AddForm />
                </div>
                <div className="box--md">
                  <ProfileTable
                    loggedIn={this.props.loggedIn}
                    donations={this.props.donations}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

const mapPropsToState = state => {
  // console.log("state");
  // console.log(state);
  return {
    loggedIn: state.auth.loggedIn,
    user: state.app.user,
    donations: state.app.userDonations,
    auth: state.auth.currentUser
  };
};

export default connect(mapPropsToState)(Profile);

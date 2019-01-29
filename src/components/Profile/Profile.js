import React from "react";
import { connect } from "react-redux";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileTable from "../ProfileTable/ProfileTable";
import Nav from "../Nav/Nav";
import { getUserInfo, getUserDonations } from "../../actions/getActions";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import "./Profile.css";

export class Profile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props
      .dispatch(getUserInfo(id))
      .then(this.props.dispatch(getUserDonations(id)));
  }

  clearAuth() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    return (
      <div className="grey">
        <Nav
          loggedIn={this.props.loggedIn}
          clearAuth={() => this.clearAuth()}
        />
        {this.props.user && this.props.donations && (
          <div className="top__wrapper">
            <ProfileTop user={this.props.user} loggedIn={null} />
            <div className="table__sec">
              <ProfileTable loggedIn={null} donations={this.props.donations} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.app.user,
    donations: state.app.userDonations
  };
};

export default connect(mapPropsToState)(Profile);

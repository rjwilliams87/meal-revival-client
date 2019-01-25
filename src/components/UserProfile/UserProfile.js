import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import AddForm from "../AddForm/AddForm";
import { getUserInfo, getUserDonations } from "../../actions/getActions";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleComplete = this.handleComplete.bind(this);
  }
  componentDidMount() {
    if (this.props.auth) {
      const id = this.props.auth.id;
      this.props
        .dispatch(getUserInfo(id))
        .then(this.props.dispatch(getUserDonations(id)));
    }
  }

  handleComplete = async () => {
    await this.props.dispatch(getUserInfo(this.props.auth.id));
    console.log("done again");
    this.setState({ updated: true });
  };

  updateDonations() {
    const id = this.props.auth.id;
    this.props.dispatch(getUserDonations(id));
  }

  clearAuth() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    if (!this.props.user) {
      return <div />;
    }
    if (
      this.props.loggedIn &&
      !this.state.updated &&
      !this.props.user.profileComplete
    ) {
      return (
        <div className="grey userProfile">
          <Nav
            loggedIn={this.props.loggedIn}
            clearAuth={() => this.clearAuth()}
          />
          <ProfileForm handleComplete={this.handleComplete} />
        </div>
      );
    } else {
      return (
        <div className="grey userProfile">
          <Nav
            loggedIn={this.props.loggedIn}
            clearAuth={() => this.clearAuth()}
          />
          {this.props.user && this.props.donations && (
            <div className="top__wrapper">
              <ProfileTop
                id={this.props.auth.id}
                user={this.props.user}
                loggedIn={this.props.loggedIn}
              />
              <div className="donation__sec">
                <div className="box--sm">
                  <AddForm
                    updateDonations={() => this.updateDonations()}
                    id={this.props.auth.id}
                  />
                </div>
                <div className="box--md">
                  <ProfileTable
                    updateTable={() => this.updateDonations()}
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
  console.log("state");
  console.log(state);
  return {
    loggedIn: state.auth.loggedIn,
    user: state.app.user,
    donations: state.app.userDonations,
    auth: state.auth.currentUser
  };
};

export default connect(mapPropsToState)(UserProfile);

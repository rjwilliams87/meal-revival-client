import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileAbout from "../ProfileAbout/ProfileAbout";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import { getUserInfo } from "../../actions/getActions";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, profileComplete: true };
  }
  componentDidMount() {
    this.props.dispatch(getUserInfo(this.props.match.params.id));
  }
  render() {
    if (this.props.user === null) {
      return <Redirect to="/" />;
    } else if (this.props.loggedIn && !this.props.user.profileComplete) {
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
          <ProfileTop
            organization={this.props.user.company}
            contact={this.props.user.contact}
            email={this.props.user.email}
            address={this.props.user.address}
            phone={this.props.user.phone || ""}
          />
          <div className="info__container">
            <ProfileAbout about={this.props.user.about || ""} />
            <ProfileTable donations={this.props.user.donations} />
          </div>
        </div>
      );
    }
  }
}

const mapPropsToState = state => ({
  user: state.app.profileView,
  loggedIn: state.auth.userLoggedIn
});

export default connect(mapPropsToState)(Profile);

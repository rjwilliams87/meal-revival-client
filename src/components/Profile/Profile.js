import React from "react";
import { connect } from "react-redux";
import ProfileTop from "../ProfileTop/ProfileTop";
import ProfileAbout from "../ProfileAbout/ProfileAbout";
import ProfileTable from "../ProfileTable/ProfileTable";
import ProfileForm from "../ProfileForm/ProfileForm";
import Nav from "../Nav/Nav";
import AddForm from "../AddForm/AddForm";
import { getUserInfo, getUserInfoSuccess } from "../../actions";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, profileComplete: true };
  }
  componentDidMount() {
    // this.props.dispatch(getUserInfo(this.props.match.params.id));
    this.props.dispatch(
      getUserInfo({
        id: 2,
        profileComplete: false,
        company: "Company 2",
        contact: "This Works",
        email: "company1@email.com",
        address: "4567 Main St Kansas City, MO",
        coords: {
          lat: 39.11,
          lng: -94.57
        },
        about:
          "Awesome company doing awesome things since the beginning of freaking time!",
        donations: [
          {
            id: 567,
            expiry: "1-20-2019",
            info: "catering leftovers",
            delivery: "yes"
          },
          {
            id: 890,
            expiry: "1-21-2019",
            info: "Soup and sandwiches",
            delivery: "yes"
          }
        ]
      })
    );
  }
  render() {
    if (this.state.loggedIn && !this.props.user.profileComplete) {
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
            phone="816.123.1234"
          />
          <div className="info__container">
            <ProfileAbout about={this.props.user.about} />
            <ProfileTable donations={this.props.user.donations} />
          </div>
        </div>
      );
    }
  }
}

const mapPropsToState = state => ({
  user: state.mealRevival.profileView
});

export default connect(mapPropsToState)(Profile);

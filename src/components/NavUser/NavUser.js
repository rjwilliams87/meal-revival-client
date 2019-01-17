import React from "react";
import { Link } from "react-router-dom";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import { connect } from "react-redux";

class NavUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    const id = this.props.user.id;
    return (
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to={`/dashboard/${id}`}>Profile</Link>
        </li>
        <li className="nav__li">
          <Link to="/donations/map">Donations</Link>
        </li>
        <li className="nav__li" onClick={this.handleClick}>
          <Link to="/login">Log Out</Link>
        </li>
      </ul>
    );
  }
}

const mapPropsToState = state => ({
  user: state.auth.currentUser
});

export default connect(mapPropsToState)(NavUser);

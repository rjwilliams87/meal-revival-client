import React from "react";
import { Link } from "react-router-dom";
import { clearAuth } from "../../actions/auth";
import { connect } from "react-redux";

class NavUser extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.props.dispatch(clearAuth());
  }
  render() {
    return (
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/">Profile</Link>
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

export default connect()(NavUser);

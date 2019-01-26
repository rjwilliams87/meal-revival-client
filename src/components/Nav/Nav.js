import React from "react";
import NavVisitor from "../NavVisitor/NavVisitor";
import NavUser from "../NavUser/NavUser";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <Link to="/" className="header__link">
              <h2 className="nav__head">Meal Revival</h2>
            </Link>
            {this.props.loggedIn ? (
              <NavUser clearAuth={this.props.clearAuth} />
            ) : (
              <NavVisitor />
            )}
          </nav>
        </header>
      </div>
    );
  }
}

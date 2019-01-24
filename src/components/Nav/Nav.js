import React from "react";
import NavVisitor from "../NavVisitor/NavVisitor";
import NavUser from "../NavUser/NavUser";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <h2 className="nav__head">Meal Revival</h2>
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

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavVisitor from "../NavVisitor/NavVisitor";
import NavUser from "../NavUser/NavUser";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <nav className="nav">
            <h2 className="nav__head">Meal Revival</h2>
            {this.props.loggedIn ? <NavUser /> : <NavVisitor />}
          </nav>
        </header>
      </div>
    );
  }
}

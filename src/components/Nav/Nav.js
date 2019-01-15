import React from "react";
import { Link } from "react-router-dom";
import NavVisitor from "../NavVisitor/NavVisitor";
import NavUser from "../NavUser/NavUser";
import "./Nav.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <h2 className="nav__head">Meal Revival</h2>
            {this.state.isLoggedIn ? <NavUser /> : <NavVisitor />}
          </nav>
        </header>
      </div>
    );
  }
}

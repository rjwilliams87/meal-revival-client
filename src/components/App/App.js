import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
require("dotenv").config();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route
                exact
                path="/register"
                render={() =>
                  !this.props.loggedIn ? <Register /> : <Profile />
                }
              />
              {/* need to be redirects */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard/:id" component={Profile} />
              <Route
                exact
                path="/donations/map"
                render={props => (
                  <Map
                    loggedIn={this.props.loggedIn}
                    lat={this.props.lat}
                    lng={this.props.lng}
                  />
                )}
              />
              <Route exact path="/profile/:id" component={Profile} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  lat: state.app.mapCoords.Latitude,
  lng: state.app.mapCoords.Longitude,
  loggedIn: state.auth.loggedIn,
  user: state.auth.currentUser || ""
});

export default connect(mapStateToProps)(App);

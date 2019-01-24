import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import UserProfile from "../UserProfile/UserProfile";
import { refreshAuthToken } from "../../actions/auth";
require("dotenv").config();

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app__container">
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  !this.props.loggedIn ? (
                    <Landing />
                  ) : (
                    <Redirect to={`/dashboard/${this.props.user.id}`} />
                  )
                }
              />
              <Route
                exact
                path="/register"
                render={() =>
                  !this.props.loggedIn ? <Register /> : <Profile />
                }
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard/:id" component={UserProfile} />
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
  user: state.auth.currentUser
});

export default connect(mapStateToProps)(App);

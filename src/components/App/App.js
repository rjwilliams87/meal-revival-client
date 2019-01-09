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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/donations/map"
                render={props => (
                  <Map lat={this.props.lat} lng={this.props.lng} />
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

App.defaultProps = {};

const mapStateToProps = state => ({
  lat: state.mapCoords.Latitude,
  lng: state.mapCoords.Longitude
});

export default connect(mapStateToProps)(App);

//             <Route exact path="/search" component={Search} />
//             {/* <Route path="/dashboard/:id" render={()=>(
//                             this.state.loggedIn ? (<Dashboard />) : (<Redirect to="/" />)
//                         )} />
//                         <Route exact path="/donations" render={()=> (
//                             this.state.loggedIn ? (<Donations />) : (<Redirect to="/" />)
//                         )} /> */}

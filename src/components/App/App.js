import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import LandingNav from '../Landing-Nav/Landing-Nav';
import Landing from '../Landing/Landing'

export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <LandingNav />
                <main>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        {/* <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route path="/dashboard/:id" render={()=>(
                            this.state.loggedIn ? (<Dashboard />) : (<Redirect to="/" />)
                        )} />
                        <Route exact path="/donations" render={()=> (
                            this.state.loggedIn ? (<Donations />) : (<Redirect to="/" />)
                        )} /> */}
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

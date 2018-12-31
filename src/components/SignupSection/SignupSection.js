import React from 'react';
import {Link} from 'react-router-dom';
import './SignupSection.css'

export default function SignupSection(props) {
    return (
        <div className="landing-sec landing-sec__signup">
            <div className="signup-box__container">
                <div className="signup-box__headers">
                    <h1 className="signup-box__h1">Preventing Waste One Plate At A Time</h1>
                    <h2 className="signup-box__h2">Feed Your Community. Save The Planet.</h2>
                </div>
                <Link to="/register"><button className="signup-box__btn">Join Today!</button></Link>
            </div>
        </div>
    )
}
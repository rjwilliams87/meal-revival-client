import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

export default function Register(props) {
    return (
        <div>
            <form className="register-form">
                <fieldset className="register-form__fieldset">
                    <legend className="register-form__legend">Sign Up!</legend>
                    <div>
                        <label>Username</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Organization Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Organization Address</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>State</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Zip</label>
                        <input type="text" />
                    </div>
                </fieldset>
            </form>
            <div>
                <p>Already a member? <Link to="/login">Login here!</Link></p>
            </div>
        </div>
    )
}
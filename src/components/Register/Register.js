import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

export default function Register(props) {
    return (
        <div>
            <form className="register-form">
                <fieldset className="register-form__fieldset">
                    <legend className="register-form__legend">Sign Up!</legend>
                    <div className="register-form__sec">
                        <label className="register-form__label">Username</label>
                        <input className="register-form__input" type="text" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">Password</label>
                        <input className="register-form__input" type="password" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">Confirm Password</label>
                        <input className="register-form__input" type="password" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">Organization Name</label>
                        <input className="register-form__input" type="text" />
                    </div>
                    <div className="register-form__sec" >
                        <label className="register-form__label">Organization Address</label>
                        <input className="register-form__ipnut" type="text" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">City</label>
                        <input className="register-form__input" type="text" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">State</label>
                        <input className="register-form__ipnut" type="text" />
                    </div>
                    <div className="register-form__sec">
                        <label className="register-form__label">Zip</label>
                        <input className="register-form__ipnut" type="text" />
                    </div>
                </fieldset>
            </form>
            <div className="path__container">
                <p>Already a member? <Link to="/login">Login here!</Link></p>
            </div>
        </div>
    )
}
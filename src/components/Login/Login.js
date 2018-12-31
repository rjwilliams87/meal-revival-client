import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login(props) {
    return (
        <div>
            <form className="login-form">
                <fieldset className="login-form__fieldset">
                    <legend className="login-form__legend">Login</legend>
                    <div className="login-form__sec">
                       <label htmlFor="login-username" className="login-form__label">Username</label>
                       <input id="login-username" type="text" className="login-form__input"/> 
                    </div>
                    <div className="login-form__sec login-form__padding">
                        <label htmlFor="login-password" className="login-form__label">Password</label>
                        <input id="login-password" className="login-form__input" type="password" />
                    </div>
                </fieldset>
            </form>
            <div className="path__container">
                <p>Not a member? <Link to="/register">Sign up here!</Link></p>
            </div>
        </div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
    return (
        <div>
            <header>
                <nav className="nav">
                    <h2 className="nav__head">Meal Revival</h2>
                    <ul className="nav__ul">
                        <li className="nav__li"><Link to="/">Home</Link></li>
                        <li className="nav__li"><Link to="/donations">Donations</Link></li>
                        <li className="nav__li"><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
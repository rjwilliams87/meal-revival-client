import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingNav(props) {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/donations">Donations</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
import React from 'react';
import SignupSection from '../SignupSection/SignupSection';
import AboutSection from '../AboutSection/AboutSection';
import HowToSection from '../HowToSection/HowToSection';

export default function Landing(props) {
    return (
        <div>
            <SignupSection />
            <AboutSection />
            <HowToSection />
        </div>
    )
}
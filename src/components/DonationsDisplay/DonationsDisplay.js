import React from 'react';
import DonationForm from '../DonationForm/DonationForm';

export default function DonationsDisplay(props) {
    return (
        <div className="info-section__container">
            <button className="info-section__btn">Add Donation</button>
            <div>
                <h2>Donation Information</h2>
                <DonationForm />
            </div>
        </div>
    )
}
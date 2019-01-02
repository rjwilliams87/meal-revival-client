import React from 'react';
import Map from '../Map/Map';
import DonationsDisplay from '../DonationsDisplay/DonationsDisplay';
import './DonationsView.css'

export default function DonationsView(props) {
    return (
        <div className="map__container">
            <Map />
            <DonationsDisplay />
        </div>
    )
}
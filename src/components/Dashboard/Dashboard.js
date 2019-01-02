import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            organization: 'Company Awesomesauce',
            join_date: `10/10/2018`,
            about: `Awesome company doing awesome things since 2006`,
            donations: [
                {
                    id: 1,
                    expiry: `1/15/2019`,
                    info: `Leftover catering, brisket and chicken`,
                    delivery: `No`,
                    contact: `Pam 816.123.4567`
                },
                {
                    id: 2,
                    expiry: `1/10/2019`,
                    info: `3lbs chicken tenders, 2lbs coleslaw from event`,
                    delivery: `No`,
                    contact: `Pam 816.123.4567`
                }
            ]
        }
    }
    render(){
        const rows = this.state.donations.map((donation) => 
            <tr key={donation.id}>
                <td>{donation.expiry}</td>
                <td>{donation.info}</td>
                <td>{donation.delivery}</td>
                <td>{donation.contact}</td>
            </tr>
        )
        const active_donations = this.state.donations.length;
    return (
        <div>
            <h2 className="company__header">{this.state.organization}</h2>
            <p>{this.state.about}</p>
            <ul>
                <li>Member since: {this.state.join_date}</li>
                <li>Avaliable Donations: {active_donations}</li>
            </ul>
            <table>
                <tr>
                    <th>Avaliable Until</th>
                    <th>Info</th>
                    <th>Delivery Avaliable</th>
                    <th>Contact</th>
                </tr>
                {rows}
            </table>
        </div>
    )
}
}


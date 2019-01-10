import React from "react";

export default class ProfileTable extends React.Component {
  render() {
    const tableData = this.props.donations.map((donation, id) => (
      <tr key={id}>
        <td>{donation.expiry}</td>
        <td>{donation.info}</td>
        <td>{donation.delivery}</td>
      </tr>
    ));
    return (
      <div className="info__box box-2">
        <div className="table__container">
          <h2 className="table__header">Avaliable Donations</h2>
          <table className="table">
            <tr>
              <th>Expires</th>
              <th>Info</th>
              <th>Delivery</th>
            </tr>
            {tableData}
          </table>
        </div>
      </div>
    );
  }
}

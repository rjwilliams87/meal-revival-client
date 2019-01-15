import React from "react";
import { connect } from "react-redux";
import Profile from "../Profile/Profile";
import LightBox from "lightbox-react";

class ProfileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isOpen: true
    });
  }
  render() {
    const updateRow = (
      <td className="td__white">
        <button>Update</button>
        <button onClick={this.handleClick}>Delete</button>
      </td>
    );
    const tableData = this.props.donations.map((donation, id) => (
      <tr key={id}>
        <td>{donation.expiry}</td>
        <td>{donation.info}</td>
        <td>{donation.delivery}</td>
        {this.props.loggedIn ? updateRow : null}
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
              {this.props.loggedIn ? <th>Update/Delete</th> : null}
            </tr>
            {tableData}
          </table>
        </div>
        {this.state.isOpen && (
          <LightBox
            mainSrc={<h1>Delete Event Permanetly?</h1>}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapPropsToState = state => ({
  loggedIn: state.mealRevival.userLoggedIn,
  donations: state.mealRevival.profileView.donations
});

export default connect(mapPropsToState)(ProfileTable);

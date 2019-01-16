import React from "react";
import { connect } from "react-redux";
import LightBox from "lightbox-react";
import DeleteModal from "../DeleteModal/DeleteModal";

class ProfileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const id = e.target.id;
    this.setState({
      isOpen: true,
      deleteId: id
    });
  }
  render() {
    const tableData = this.props.donations.map((donation, id) => {
      const updateRow = (
        <td>
          <button onClick={this.handleClick} id={donation.id}>
            Delete
          </button>
        </td>
      );
      return (
        <tr key={id}>
          <td>{donation.expiry}</td>
          <td>{donation.info}</td>
          <td>{donation.delivery}</td>
          {this.props.loggedIn ? updateRow : null}
        </tr>
      );
    });

    return (
      <div className="info__box box-2">
        <div className="table__container">
          <h2 className="table__header">Avaliable Donations</h2>
          <table className="table">
            <tr>
              <th>Expires</th>
              <th>Info</th>
              <th>Delivery</th>
              {this.props.loggedIn ? <th>Delete</th> : null}
            </tr>
            {tableData}
          </table>
        </div>
        {this.state.isOpen && (
          <LightBox
            mainSrc={<DeleteModal btn_id={this.state.deleteId} />}
            onCloseRequest={() =>
              this.setState({
                isOpen: false,
                deleteId: null
              })
            }
          />
        )}
      </div>
    );
  }
}

const mapPropsToState = state => ({
  loggedIn: state.auth.userLoggedIn,
  donations: state.app.profileView.donations
});

export default connect(mapPropsToState)(ProfileTable);

import React from "react";
import LightBox from "lightbox-react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProfileTable.css";

export default class ProfileTable extends React.Component {
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
    const tableData = this.props.donations.map((donation, index) => {
      const updateRow = (
        <td>
          <button onClick={this.handleClick} id={donation._id}>
            <i class="fas fa-trash-alt fa-2x icon--delete" id={donation._id} />
          </button>
        </td>
      );
      return (
        <tr key={index}>
          <td>{donation.expiry}</td>
          <td>{donation.info}</td>
          <td>{donation.delivery}</td>
          {this.props.loggedIn ? updateRow : null}
        </tr>
      );
    });

    return (
      <div>
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

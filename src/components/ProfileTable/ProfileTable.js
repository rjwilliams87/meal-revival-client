import React from "react";
import LightBox from "lightbox-react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProfileTable.css";
import "lightbox-react/style.css";

export default class ProfileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }
  handleClick(e) {
    const id = e.target.id;
    this.setState({
      isOpen: true,
      deleteId: id
    });
    console.log(this.state.deleteId);
  }
  handleDeleteBtn() {
    this.setState({
      isOpen: false,
      deleteId: null
    });
    this.props.updateTable();
  }
  render() {
    const tableData = this.props.donations.map((donation, index) => {
      const updateRow = (
        <td>
          <button
            className="btn__delete"
            onClick={this.handleClick}
            id={donation._id}
          >
            <i class="fas fa-trash" id={donation._id} />
          </button>
        </td>
      );
      return (
        <tr key={index}>
          <td>{donation.expiry.replace(/T.*$/, "")}</td>
          <td className="td__info">{donation.info}</td>
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
              <th className="th__info">Info</th>
              <th>Delivery</th>
              {this.props.loggedIn ? <th>Delete</th> : null}
            </tr>
            {tableData}
          </table>
        </div>
        {this.state.isOpen && (
          <LightBox
            mainSrc={
              <DeleteModal
                btn_id={this.state.deleteId}
                handleDeleteBtn={this.handleDeleteBtn}
              />
            }
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

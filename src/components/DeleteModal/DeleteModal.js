import React from "react";
import "./DeleteModal.css";
import { connect } from "react-redux";
import { deleteDonation } from "../../actions/deleteActions";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async e => {
    const id = e.target.id;
    await this.props.dispatch(deleteDonation(id));
    this.props.handleDeleteBtn();
  };

  render() {
    return (
      <div className="delete__container">
        <div className="modal__container container--white">
          <h2>Delete Donation Permanently?</h2>
          <button
            onClick={this.handleClick}
            className="btn--red btn modal__btn"
            id={this.props.btn_id}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(DeleteModal);

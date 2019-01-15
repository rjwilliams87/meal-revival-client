import React from "react";
import "./DeleteModal.css";
import { connect } from "react-redux";
import { deleteDonation } from "../../actions/deleteResults";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //refresh page
  }

  handleClick(e) {
    const id = e.target.id;
    this.props.dispatch(deleteDonation(id));
  }

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

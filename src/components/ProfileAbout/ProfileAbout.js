import React from "react";
import { connect } from "react-redux";

export default function ProfileAbout(props) {
  return (
    <div className="info__box box-1">
      <div className="box-1__container">
        <p>{props.user.about}</p>
      </div>
    </div>
  );
}

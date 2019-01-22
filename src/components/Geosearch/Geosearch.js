import React from "react";
import "./Geosearch.css";
import { Link } from "react-router-dom";

export default function Geosearch(props) {
  return (
    <div className="search__container search__container--margin">
      <div>
        <input
          className="search__input search__input--border"
          placeholder={props.placeholder}
          type="text"
          value={props.query}
          onChange={e => props.onChange(e)}
        />
      </div>
      <div className="btn__container">
        <Link to="/donations/map">
          <button
            className="search__btn btn--red search__btn--border"
            type="submit"
          >
            {props.btnText}
          </button>
        </Link>
      </div>
    </div>
  );
}

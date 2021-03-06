import React from "react";
import "./Geosearch.css";
import { Link } from "react-router-dom";

export default function Geosearch(props) {
  return (
    <div className="search__container--margin">
      <div className="search__container">
        <div>
          <input
            aria-label="enter a city in this input field then select from the options"
            className="search__input search__input--border"
            placeholder={props.placeholder}
            type="text"
            value={props.query}
            onChange={e => props.onChange(e)}
          />
        </div>
        <div className="btn__container">
          <Link onClick={() => props.onClick()} to="/donations/map">
            <button
              className="search__btn btn--red search__btn--border"
              type="submit"
            >
              {props.btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

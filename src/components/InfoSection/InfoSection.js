import React from "react";
import "./InfoSection.css";

export default function InfoSection(props) {
  return (
    <div id="scroll--target" className="section__container">
      <div className="section__box">
        <span className="landing__icon">
          <i className="far fa-handshake fa-3x icon-mobile" />
        </span>
        <span className="span__header">Get connected</span> <br />
        <br />
        Meal Revival makes it easy for organizations in need to connect with
        local companies that are willing to help. Simply search your city and
        view donation listings.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-carrot fa-3x icon-mobile" />
        </span>
        <span className="span__header">Feed your community</span>
        <br />
        <br />
        Have food that would otherwise go to waste? Meal Revival makes it easy
        to list that food as a free donation. Sign up for an account to start
        list donations today.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-globe-americas fa-3x icon-mobile" />
        </span>
        <span className="span__header">Reduce waste</span>
        <br />
        <br />
        30 to 40% of our food ends up in the trash! Whether you're looking for
        food or wanting to donate, together when we fight hunger we also fight
        climate change!
      </div>
    </div>
  );
}

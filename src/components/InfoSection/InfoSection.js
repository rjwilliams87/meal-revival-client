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
        <br /> Meet local businesses and nonprofits aiming to combat food waste
        and hunger by helping transfer unused food to those that need it most.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-carrot fa-3x icon-mobile" />
        </span>
        <span className="span__header">Feed your community</span>
        <br />
        <br /> 40 million Americans struggle with hunger. Giving to those in
        need shouldn't be so hard, that's why Meal Revival was created.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-globe-americas fa-3x icon-mobile" />
        </span>
        <span className="span__header">Reduce waste</span>
        <br />
        <br />
        30 to 40% of our food ends up in the trash! When you donate, you're not
        only fighting hunger, you're fighting climate change as well!
      </div>
    </div>
  );
}

import React from "react";
import "./InfoSection.css";

export default function InfoSection(props) {
  return (
    <div id="scroll--target" className="section__container">
      <div className="section__box">
        <span className="landing__icon">
          <i className="far fa-handshake fa-2x" />
        </span>
        <span className="span__header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>{" "}
        <br />
        <br /> Sed nec nulla et sem dignissim finibus nec eget arcu. Sed pretium
        velit elit, vitae vehicula nisi sodales in. Nulla molestie faucibus ex,
        id efficitur ante mattis et. Mauris dapibus ut elit a porttitor. Sed
        risus orci, vehicula ut nibh in, vehicula consectetur metus.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-carrot fa-2x" />
        </span>
        <span className="span__header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <br />
        <br /> Sed nec nulla et sem dignissim finibus nec eget arcu. Sed pretium
        velit elit, vitae vehicula nisi sodales in. Nulla molestie faucibus ex,
        id efficitur ante mattis et. Mauris dapibus ut elit a porttitor. Sed
        risus orci, vehicula ut nibh in, vehicula consectetur metus.
      </div>
      <div className="section__box">
        <span className="landing__icon">
          <i className="fas fa-globe-americas fa-2x" />
        </span>
        <span className="span__header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <br />
        <br /> Sed nec nulla et sem dignissim finibus nec eget arcu. Sed pretium
        velit elit, vitae vehicula nisi sodales in. Nulla molestie faucibus ex,
        id efficitur ante mattis et. Mauris dapibus ut elit a porttitor. Sed
        risus orci, vehicula ut nibh in, vehicula consectetur metus.
      </div>
    </div>
  );
}

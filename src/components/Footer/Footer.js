import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <h4 className="footer__header">Resources</h4>
        <p className="footer__p">
          <a
            target="_blank"
            className="footer__a"
            href="https://publichealthlawcenter.org/sites/default/files/resources/Liability%20Protection%20Food%20Donation.pdf"
          >
            Public Health Law Center Donor Liability Info
          </a>
        </p>
        <p className="footer__p">
          <a
            target="_blank"
            className="footer__a"
            href="https://www.chlpi.org/wp-content/uploads/2013/12/Emerson-Act-Legal-Fact-Sheet.pdf"
          >
            Bill Emerson Legal Info - Harvard
          </a>
        </p>
        <p className="footer__p">
          <a
            target="_blank"
            className="footer__a"
            href="http://media.law.uark.edu/arklawnotes/2013/08/08/the-legal-guide-to-the-bill-emerson-good-samaritan-food-donation-act/"
          >
            Bill Emerson Legal Guide - University of Arkansas
          </a>
        </p>
      </div>
    </footer>
  );
}

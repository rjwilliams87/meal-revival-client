import React from "react";

import CompanyProfile from "../CompanyProfile/CompanyProfile";
import AddForm from "../AddForm/AddForm";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompanyProfile
          organization="Company ABC"
          contact="Jon Snow"
          email="jon@email.com"
          offered="3"
          avaliable="1"
          address="1234 Main St Kansas City, MO"
          phone="816.123.1234"
          onClick={this.openPopupBox}
        />
      </div>
    );
  }
}

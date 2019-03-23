import React from "react";
import { shallow } from "enzyme";
import LandingNav from "./LandingNav";

describe("<LandingNav />", () => {
  it("should render without crashing", () => {
    shallow(<LandingNav />);
  });
});

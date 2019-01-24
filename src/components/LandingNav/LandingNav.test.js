import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LandingNav from "./LandingNav";
configure({ adapter: new Adapter() });

describe("<LandingNav />", () => {
  it("should render without crashing", () => {
    shallow(<LandingNav />);
  });
});

import React from "react";
import { shallow } from "enzyme";
import NavUser from "./NavUser";

describe("<NavUser />", () => {
  it("should render without crashing", () => {
    shallow(<NavUser />);
  });
});

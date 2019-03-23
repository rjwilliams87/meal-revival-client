import React from "react";
import { shallow } from "enzyme";
import LoginPath from "./LoginPath";

describe("<LoginPath />", () => {
  it("should render without crashing", () => {
    shallow(<LoginPath />);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("<Nav />", () => {
  it("Renders without crashing", () => {
    shallow(<Nav />);
  });
});

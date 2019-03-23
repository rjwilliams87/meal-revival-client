import React from "react";
import { shallow } from "enzyme";
import NavVisitor from "./NavVisitor";

describe("<NavVisitor />", () => {
  it("should render without crashing", () => {
    shallow(<NavVisitor />);
  });
});

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavVisitor from "./NavVisitor";
configure({ adapter: new Adapter() });

describe("<NavVisitor />", () => {
  it("should render without crashing", () => {
    shallow(<NavVisitor />);
  });
});

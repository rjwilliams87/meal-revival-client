import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginPath from "./LoginPath";
configure({ adapter: new Adapter() });

describe("<LoginPath />", () => {
  it("should render without crashing", () => {
    shallow(<LoginPath />);
  });
});

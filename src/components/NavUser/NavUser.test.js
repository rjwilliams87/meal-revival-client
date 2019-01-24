import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavUser from "./NavUser";
configure({ adapter: new Adapter() });

describe("<NavUser />", () => {
  it("should render without crashing", () => {
    shallow(<NavUser />);
  });
});

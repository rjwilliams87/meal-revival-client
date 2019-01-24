import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Landing } from "./Landing";
configure({ adapter: new Adapter() });

describe("<Landing />", () => {
  it("Renders without crashing", () => {
    shallow(<Landing />);
  });

  it("should have empty strings in initial state", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.state("query")).toEqual("");
    expect(wrapper.state("address")).toEqual("");
  });
});

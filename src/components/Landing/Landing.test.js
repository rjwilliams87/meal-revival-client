import React from "react";
import { shallow, mount } from "enzyme";
import { Landing } from "./Landing";

describe("<Landing />", () => {
  it("Renders without crashing", () => {
    shallow(<Landing />);
  });

  it("should have empty strings in initial state", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.state("query")).toEqual("");
    expect(wrapper.state("address")).toEqual("Kansas City, MO");
  });
});

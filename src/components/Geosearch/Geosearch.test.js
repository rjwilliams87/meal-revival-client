import React from "react";
import { shallow } from "enzyme";
import Geosearch from "./Geosearch";

describe("<Geosearch />", () => {
  it("should render without crashing", () => {
    shallow(<Geosearch />);
  });

  //   it("should have an input value equal to query prop", () => {
  //     const value = "foo";
  //     const wrapper = shallow(<Geosearch query={value} />);
  //     expect(wrapper.find("input").text()).to.equal(value);
  //   });
});

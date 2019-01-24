import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Geosearch from "./Geosearch";
configure({ adapter: new Adapter() });

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

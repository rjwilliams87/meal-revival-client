import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InfoSection from "./InfoSection";
configure({ adapter: new Adapter() });

describe("<InfoSection />", () => {
  it("should render without crashing", () => {
    shallow(<InfoSection />);
  });
});

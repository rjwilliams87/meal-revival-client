import React from "react";
import { configure, shallow, mount } from "enzyme";
import ProfileAbout from "./ProfileAbout";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<ProfileAbout />", () => {
  it("should render without crashing", () => {
    shallow(<ProfileAbout user={{ about: null }} />);
  });
});

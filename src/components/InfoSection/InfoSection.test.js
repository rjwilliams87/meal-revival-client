import React from "react";
import { shallow } from "enzyme";
import InfoSection from "./InfoSection";

describe("<InfoSection />", () => {
  it("should render without crashing", () => {
    shallow(<InfoSection />);
  });
});

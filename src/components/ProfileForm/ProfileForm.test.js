import React from "react";
import { configure, shallow, mount } from "enzyme";
import { ProfileForm } from "./ProfileForm";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<ProfileForm />", () => {
  it("should render without crashing", () => {
    shallow(<ProfileForm handleSubmit={jest.fn()} />);
  });
});

import React from "react";
import { shallow, mount } from "enzyme";
import { ProfileForm } from "./ProfileForm";

describe("<ProfileForm />", () => {
  it("should render without crashing", () => {
    shallow(<ProfileForm handleSubmit={jest.fn()} />);
  });

  it("should call onSubmit when submitting", () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<ProfileForm handleSubmit={mockSubmit} />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(mockSubmit).toHaveBeenCalled();
  });
});

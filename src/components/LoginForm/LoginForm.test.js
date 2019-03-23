import React from "react";
import { shallow, mount } from "enzyme";
import { LoginForm } from "./LoginForm";

describe("<LoginForm />", () => {
  it("should render without crashing", () => {
    shallow(<LoginForm handleSubmit={jest.fn()} />);
  });

  it("should call onSubmit when submitting", () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={mockSubmit} />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(mockSubmit).toHaveBeenCalled();
  });
});

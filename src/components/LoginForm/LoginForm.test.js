import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginForm } from "./LoginForm";
configure({ adapter: new Adapter() });

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

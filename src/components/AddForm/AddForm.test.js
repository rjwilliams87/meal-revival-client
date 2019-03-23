import React from "react";
import { shallow } from "enzyme";
import { AddForm } from "./AddForm";

describe("<AddForm />", () => {
  it("should render without crashing", () => {
    shallow(<AddForm handleSubmit={jest.fn()} />);
  });

  it("should call onSubmit when submitting", () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<AddForm handleSubmit={mockSubmit} />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(mockSubmit).toHaveBeenCalled();
  });
});

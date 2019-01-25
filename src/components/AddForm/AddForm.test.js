import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddForm } from "./AddForm";
configure({ adapter: new Adapter() });

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

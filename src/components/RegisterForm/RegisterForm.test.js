import React from "react";
import { configure, shallow, mount } from "enzyme";
import { RegisterForm } from "./RegisterForm";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<RegisterForm />", () => {
  it("should render without crashing", () => {
    shallow(
      <RegisterForm
        handleSubmit={() => {
          return;
        }}
      />
    );
  });

  it("should call onSubmit when submitting", () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<RegisterForm handleSubmit={mockSubmit} />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(mockSubmit).toHaveBeenCalled();
  });
});

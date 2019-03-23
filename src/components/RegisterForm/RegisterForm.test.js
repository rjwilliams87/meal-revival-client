import React from "react";
import { shallow, mount } from "enzyme";
import { RegisterForm } from "./RegisterForm";

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

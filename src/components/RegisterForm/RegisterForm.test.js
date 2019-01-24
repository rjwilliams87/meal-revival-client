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

  // it("should show error message when passed from parent", () => {
  //   const wrapper = shallow(
  //     <RegisterForm handleSubmit={jest.fn()} registerError={true} />
  //   );
  //   expect(wrapper.hasClass("register__error")).toEqual(true);
  // });

  // it("should update state on address change", () => {
  //   const callback = jest.fn();
  //   const value = "foo";
  //   const wrapper = shallow(<RegisterForm handleSubmit={jest.fn()} />);
  //   wrapper.find("#address").simulate("change");
  // });
});

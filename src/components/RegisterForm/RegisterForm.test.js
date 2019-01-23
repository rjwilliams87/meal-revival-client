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
});

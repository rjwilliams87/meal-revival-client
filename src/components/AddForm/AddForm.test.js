import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddForm } from "./AddForm";
configure({ adapter: new Adapter() });

describe("<AddForm />", () => {
  it("should render without crashing", () => {
    shallow(<AddForm handleSubmit={jest.fn()} />);
  });
});

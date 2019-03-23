import React from "react";
import { shallow, mount } from "enzyme";
import ProfileTop from "./ProfileTop";

describe("<ProfileTop />", () => {
  const user = {
    address: "foo",
    phone: "bar",
    phone: "baz",
    email: "buzz",
    companyName: "bang",
    contactName: "boom",
    about: "blonde"
  };
  it("should render without crashing", () => {
    shallow(<ProfileTop user={user} />);
  });

  it("should render with correct props", () => {
    const wrapper = mount(<ProfileTop user="Success" />);
    expect(wrapper.props().user).toEqual("Success");
  });

  it("should insert props into correct element", () => {
    const wrapper = shallow(<ProfileTop user={user} />);
    expect(
      wrapper
        .find("h2")
        .equals(<h2 className="company__header">{user.companyName}</h2>)
    ).toEqual(true);
  });
});

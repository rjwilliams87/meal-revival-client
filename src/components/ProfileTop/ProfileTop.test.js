import React from "react";
import { configure, shallow, mount } from "enzyme";
import ProfileTop from "./ProfileTop";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

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

  it("should insert props into correct element", () => {
    const wrapper = shallow(<ProfileTop user={user} />);
    expect(
      wrapper
        .find("h2")
        .equals(<h2 className="company__header">{user.companyName}</h2>)
    ).toEqual(true);
  });
});

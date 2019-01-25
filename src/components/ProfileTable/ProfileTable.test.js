import React from "react";
import { configure, shallow, mount } from "enzyme";
import ProfileTable from "./ProfileTable";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<ProfileTable />", () => {
  const donations = [
    {
      _id: 1,
      expiry: "",
      info: "baz",
      coords: { Latitude: 123, Lognitude: 345 },
      userId: 11
    }
  ];
  it("should render without crashing", () => {
    shallow(<ProfileTable donations={[]} />);
  });

  it("should have state.isOpen set to false", () => {
    const wrapper = shallow(<ProfileTable donations={[]} />);
    expect(wrapper.state().isOpen).toEqual(false);
  });

  it("should render with correct props", () => {
    const donations = [{ _id: 1, expiry: "foo", info: "bar", delivery: "No" }];
    const wrapper = mount(<ProfileTable donations={donations} />);
    expect(wrapper.props().donations).toEqual(donations);
  });

  it("should render button when logged in", () => {
    const wrapper = shallow(
      <ProfileTable loggedIn={true} donations={donations} />
    );
    expect(wrapper.find("button").hasClass("btn__delete")).toEqual(true);
  });

  // it("should call handleDeleteBtn on click", () => {
  //   const donations = [
  //     { _id: 1, expiry: "foo T ", info: "bar", delivery: "No" }
  //   ];
  //   // callback = jest.fn();
  //   const wrapper = shallow(<ProfileTable donations={[donations]} />);
  //   const button = wrapper.find("button");
  //   button.simulate("click");
  //   expect(wrapper.state().isOpen).toEqual(true);
  // });
});

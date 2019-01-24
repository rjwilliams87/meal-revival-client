import React from "react";
import { configure, shallow, mount } from "enzyme";
import { Profile } from "./Profile";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<Profile />", () => {
  const match = { params: { id: 1 } };
  const dispatch = jest.fn(() => Promise.resolve());
  it("should render without crashing", () => {
    shallow(
      <Profile dispatch={jest.fn(() => Promise.resolve())} match={match} />
    );
  });

  it("should call dispatch when mounted", () => {
    const wrapper = shallow(<Profile dispatch={dispatch} match={match} />);
    expect(dispatch).toHaveBeenCalled();
  });

  //   it("should render wrapper div after receiving props", () => {
  //     const wrapper = shallow(
  //       <Profile dispatch={dispatch} match={match} user={true} donations={[]} />
  //     );
  //     expect(wrapper.hasClass("grey")).toEqual(true);
  //   });
});

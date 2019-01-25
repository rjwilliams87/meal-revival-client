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

  it("should call dispatch when on mount", () => {
    const wrapper = shallow(<Profile dispatch={dispatch} match={match} />);
    expect(dispatch).toHaveBeenCalled();
  });

  // it("should render with correct props", () => {
  //   const wrapper = shallow(
  //     <Profile
  //       dispatch={dispatch}
  //       match={match}
  //       loggedIn={false}
  //       user="user"
  //       donations={[
  //         { id: 1, expiry: "2019-01-01", info: "info", delivery: "No" }
  //       ]}
  //     />
  //   );
  //   expect(wrapper.props().loggedIn).toEqual(false);
  // });
});

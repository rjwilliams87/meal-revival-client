import React from "react";
import { configure, shallow, mount } from "enzyme";
import { UserProfile } from "./UserProfile";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const mockFetchUserDataAction = {
  type: "FETCH_USER_DATA"
};
const mockFetchDonationsAction = {
  type: "FETCH_USER_DONATIONS"
};
jest.mock(
  "../../actions/getActions",
  () => Object.assign({}, require.requireActual("../../actions/getActions")),
  {
    getUserInfo: jest.fn().mockImplementation(() => {
      return mockFetchUserDataAction;
    }),
    getUserDonations: jest.fn().mockImplementation(() => {
      return mockFetchDonationsAction;
    })
  }
);

describe("<UserProfile />", () => {
  it("Renders without crashing", () => {
    shallow(<UserProfile />);
  });

  it("should render UserProfile when logged in", () => {
    const props = {
      loggedIn: true,
      auth: {
        id: true
      },
      user: true
    };
    const wrapper = shallow(
      <UserProfile loggedIn={props.loggedIn} user={props.user} />
    );
    expect(wrapper.hasClass("grey")).toEqual(true);
  });

  it("should dispatch getUserInfo on mount", () => {
    const dispatch = jest.fn(() => Promise.resolve());
    const props = {
      loggedIn: true,
      user: true,
      auth: {
        id: 1
      }
    };
    shallow(<UserProfile dispatch={dispatch} auth={props.auth} />);
    expect(dispatch).toHaveBeenCalled();
  });
});

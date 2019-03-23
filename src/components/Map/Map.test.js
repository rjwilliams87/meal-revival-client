import React from "react";
import { shallow } from "enzyme";
import { Map } from "./Map";

describe("<Map />", () => {
  const dispatch = jest.fn();
  const coords = { lat: 30, lng: -90 };

  it("should render without crashing", () => {
    shallow(
      <Map
        dispatch={dispatch}
        lat={coords.lat}
        lng={coords.lng}
        donations={[]}
      />
    );
  });

  it("should call dispatch when mounted", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Map
        dispatch={dispatch}
        lat={coords.lat}
        lng={coords.lng}
        donations={[]}
      />
    );
    expect(dispatch).toHaveBeenCalled();
  });
});

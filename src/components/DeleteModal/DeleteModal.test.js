import React from "react";
import { shallow } from "enzyme";
import { DeleteModal } from "./DeleteModal";

describe("<DeleteModal />", () => {
  it("should render without crashing", () => {
    shallow(<DeleteModal />);
  });

  it("should render btn with proper id", () => {
    const id = "bizz";
    const wrapper = shallow(<DeleteModal btn_id={id} />);
    expect(wrapper.find("button").html()).toEqual(
      '<button class="btn--red btn modal__btn" id="bizz">Delete</button>'
    );
  });

  //   it("should call dispatch on click", () => {
  //     const dispatch = jest.fn(() => Promise.resolve());
  //     const id = "foo";
  //     const wrapper = shallow(
  //       <DeleteModal
  //         dispatch={dispatch}
  //         handleDeleteBtn={jest.fn()}
  //         btn_id={id}
  //       />
  //     );
  //     wrapper.find("button").simulate("click");
  //     expect(dispatch).toHaveBeenCalled();
  //   });
});

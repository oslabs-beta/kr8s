import React from "react";
import Pods from "../containers/Pods.jsx";

import { shallow } from "enzyme";

describe("testing the test", () => {
  test("see if it works", () => {
    const wrapper = shallow(<Pods />);
    // expect(wrapper.find("div").text()).toContain("something");
    console.log(wrapper.debug());
    // expect(1).toBe(1);
  });
});

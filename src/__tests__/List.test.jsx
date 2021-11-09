import React from "react";

import List from "../components/List.jsx";

import { shallow, mount } from "enzyme";

describe("test to see if PodView page is rendering and functioning as expected", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<List />);
  });
  beforeEach(() => {});
  test("pod view container count", () => {
    expect(wrapper.find("Banner").props().items[0].value).toBe(1);
  });
  // test("render 1 Banner component in Pod view page", () => {
  //   expect(wrapper.find("Banner")).toHaveLength(1);
  // });
  // test("render 0 iframes in Pod view page", () => {
  //   expect(wrapper.find("iframe")).toHaveLength(0);
  // });
  // test("render 1 List component in Pod view page", () => {
  //   expect(wrapper.find("List")).toHaveLength(1);
  // });
  // test("3 list headers passed to List component", () => {
  //   expect(wrapper.find("List").props().listValueHeaders).toHaveLength(3);
  // });
  // test("list reroute prop is falsy", () => {
  //   expect(wrapper.find("List").props().reroute).toBeFalsy();
  // });
  // test("list listValue prop object", () => {
  //   expect(wrapper.find("List").props().listValue[0].name).toBe(
  //     "testContainer"
  //   );
  //   expect(wrapper.find("List").props().listValue[0].ready).toBeTruthy();
  //   expect(wrapper.find("List").props().listValue[0].restarts).toBe(0);
  // });
});

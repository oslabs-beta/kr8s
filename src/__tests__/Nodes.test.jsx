import React from "react";

import Nodes from "../containers/Nodes.jsx";

import { shallow, mount } from "enzyme";

describe("test to see if Nodes page is rendering and functioning as expected", () => {
  let wrapper;
  const nodes = [
    {
      metadata: {
        name: "testNode",
      },
      status: {
        conditions: [
          { status: false },
          { status: false },
          { status: false },
          { status: true },
        ],
      },
    },
  ];
  beforeAll(() => {
    wrapper = mount(<Nodes nodes={nodes} />);
  });
  beforeEach(() => {
    const nodeValues = {
      node: null,
      memorypressure: null,
      diskpressure: null,
      pidpressure: null,
      ready: null,
    };
  });
  test("number of nodes count incrementing functionality", () => {
    expect(wrapper.find("Banner").props().items[0].value).toBe(1);
  });
  test("render 1 Banner component in Nodes page", () => {
    expect(wrapper.find("Banner")).toHaveLength(1);
  });
  test("render 3 iframes in Nodes page", () => {
    expect(wrapper.find("iframe")).toHaveLength(3);
  });
  test("render 1 List component in Nodes page", () => {
    expect(wrapper.find("List")).toHaveLength(1);
  });
  test("5 list headers passed to List component", () => {
    expect(wrapper.find("List").props().listValueHeaders).toHaveLength(5);
  });
  test("list reroute prop is falsy", () => {
    expect(wrapper.find("List").props().reroute).toBeFalsy();
  });
  test("list listValue prop object", () => {
    expect(
      wrapper.find("List").props().listValue[0].memorypressure
    ).toBeFalsy();
    expect(wrapper.find("List").props().listValue[0].diskpressure).toBeFalsy();
    expect(wrapper.find("List").props().listValue[0].pidpressure).toBeFalsy();
    expect(wrapper.find("List").props().listValue[0].ready).toBeTruthy();
  });
});

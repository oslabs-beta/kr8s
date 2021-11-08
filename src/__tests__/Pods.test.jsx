import React from "react";

import Pods from "../containers/Pods.jsx";

import { shallow, mount } from "enzyme";

describe("test to see if Pods page is rendering and functioning as expected", () => {
  let wrapper, runningPods, pendingPods, failedPods, unknownPods, succeededPods;
  const pods = [
    {
      status: {
        phase: "Running",
        conditions: [
          { status: true },
          { status: true },
          { status: true },
          { status: true },
        ],
        containerStatuses: true,
      },
      metadata: { name: "testPod" },
      spec: { containers: [1, 2, 3] },
    },
  ];
  beforeAll(() => {
    wrapper = mount(<Pods pods={pods} />);
  });
  beforeEach(() => {
    (runningPods = 0),
      (pendingPods = 0),
      (failedPods = 0),
      (unknownPods = 0),
      (succeededPods = 0);
  });
  test("pod status incrementing functionality", () => {
    // console.log(wrapper.find("Banner").props())
    expect(wrapper.find("Banner").props().items[0].value).toBe(1);
    expect(wrapper.find("Banner").props().items[1].value).toBe(0);
    expect(wrapper.find("Banner").props().items[2].value).toBe(0);
    expect(wrapper.find("Banner").props().items[3].value).toBe(0);
    expect(wrapper.find("Banner").props().items[4].value).toBe(0);
  });
  test("render 1 Banner component in Pods page", () => {
    expect(wrapper.find("Banner")).toHaveLength(1);
  });
  test("render 5 iframes in Pods page", () => {
    expect(wrapper.find("iframe")).toHaveLength(5);
  });
  test("render 1 List component in Pods page", () => {
    expect(wrapper.find("List")).toHaveLength(1);
  });
  test("6 list headers passed to List component", () => {
    expect(wrapper.find("List").props().listValueHeaders).toHaveLength(6);
  });
  test("list reroute prop is truthy", () => {
    expect(wrapper.find("List").props().reroute).toBeTruthy();
  });
  test("list listValue prop object", () => {
    expect(wrapper.find("List").props().listValue[0].initialized).toBeTruthy();
    expect(wrapper.find("List").props().listValue[0].ready).toBeTruthy();
    expect(
      wrapper.find("List").props().listValue[0].containersReady
    ).toBeTruthy();
    expect(wrapper.find("List").props().listValue[0].podScheduled).toBeTruthy();
  });
});

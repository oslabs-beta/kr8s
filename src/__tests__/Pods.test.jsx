import React from "react";

// import App from "../containers/App.jsx";
import Pods from "../containers/Pods.jsx";
import Banner from "../components/Banner.jsx";

import { shallow, mount } from "enzyme";

describe("testing the test", () => {
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
      metadata: { name: null },
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
  test("test to see if pod status increment function is working correctly", () => {
    expect(wrapper.find(Banner).props().items[0].value).toBe(1);
  });
  test("see if it works2", () => {
    expect(2).toBe(2);
  });
});
describe("testing the test2", () => {
  test("see if it works3", () => {
    expect(1).toBe(1);
  });
  test("see if it works4", () => {
    expect(2).toBe(2);
  });
});

import React from "react";
import { mount } from "enzyme";

import Dashboard from "../containers/Dashboard.jsx";
import Banner from "../components/Banner.jsx";
import { ExpansionPanelActions } from "@material-ui/core";

describe('Test for Dashboard Component Rendering The Proper Information', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Dashboard 
        numNodes = {2}
        numPods = {5}
        numContainers = {24}
      />);
  });


  test('Should have the correct prop values', () => {
    expect(wrapper.props().numNodes).toBe(2);
    expect(wrapper.props().numPods).toBe(5);
    expect(wrapper.props().numContainers).toBe(24);
  });

  test('Should pass prop values down to the Banner Component', () => {
    expect(wrapper.find("Banner").props().items[0].value).toBe(2);
    expect(wrapper.find("Banner").props().items[1].value).toBe(5);
    expect(wrapper.find("Banner").props().items[2].value).toBe(24);
  })
})

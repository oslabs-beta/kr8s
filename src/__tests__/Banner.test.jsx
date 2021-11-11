import React from "react";

import Banner from "../components/Banner.jsx";

import { mount, shallow } from "enzyme";

describe('Test Banner Component', () => {
  const testItems = [
    {header: 'Header1', value: 1},
    {header: 'Header2', value: 2},
    {header: 'Header3', value: 3}
  ];

  it('Component accepts items props', ()=>{
    const wrapper = mount(<Banner items={testItems}/>)
    
    expect(wrapper.props().items).toEqual(testItems);
    wrapper.setProps({items: [{header: 'test1', value: 10}]});
    expect(wrapper.props().items[0].header).toEqual('test1');
  });
  
  
  it('Component has all props passed down', ()=>{
    const wrapper = mount(<Banner items={testItems}/>)  
    expect(wrapper.props().items).toHaveLength(3);
  });

})
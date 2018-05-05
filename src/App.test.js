import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
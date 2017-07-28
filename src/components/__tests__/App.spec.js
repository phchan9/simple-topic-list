import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

/* eslint-disable react/jsx-filename-extension */
describe('App Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

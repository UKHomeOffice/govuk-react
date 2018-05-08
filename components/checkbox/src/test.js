import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Checkbox from './';

describe('Checkbox', () => {
  const example = 'example';
  const wrapper = <Checkbox>{example}</Checkbox>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('should render an input type="checkbox"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="checkbox"]')).toBeTruthy();
  });

  it('should render a label', () => {
    const output = shallow(wrapper);
    expect(output.find('label')).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});

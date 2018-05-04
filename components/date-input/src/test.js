import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import DateInput from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('DateInput', () => {
  const example = 'example';
  const wrapper = <DateInput errorText={example}>{example}</DateInput>;
  let props;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateInput errorText={example} hintText={example}>
        {example}
      </DateInput>,
      div,
    );
  });

  it('should render an input type="text"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it('should render a label', () => {
    const output = shallow(wrapper);
    expect(output.find('label')).toBeTruthy();
  });

  it('matches wrappersnapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('passes `props` to the rendered label', () => {
    expect(mount(<DateInput errorText={example}>{example}</DateInput>).find('input')).toHaveLength(3);
    expect(mount(<DateInput hintText={example}>{example}</DateInput>).find('div')).toHaveLength(2);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });
});

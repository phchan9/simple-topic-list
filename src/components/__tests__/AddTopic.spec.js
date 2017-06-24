import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddTopic from '../AddTopic';

const setup = () => {
  const props = {
    addTopic: jest.fn()
  };

  const wrapper = mount(<AddTopic {...props} />);

  return {
    wrapper,
    props
  };
};

describe('AddTopic Component', () => {
  it('render correctly', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should properly fire `addTopic` callback when submit a new topic', () => {
    const { wrapper, props } = setup();
    const form = wrapper.find('form');
    const textArea = wrapper.find('textarea');
    textArea.node.value = 'This is a test';
    textArea.simulate('change', textArea);
    form.simulate('submit', {
      preventDefault: () => {}
    });
    expect(props.addTopic).toHaveBeenCalled();
  });

  it('should show an error that indicate the topic exceed 255 characters', () => {
    const { wrapper } = setup();
    const errorMsgLabelWrapper = wrapper.find('.error');
    const form = wrapper.find('form');
    const textArea = wrapper.find('textarea');
    textArea.node.value = 'a'.repeat(256);
    textArea.simulate('change', textArea);
    form.simulate('submit', {
      preventDefault: () => {}
    });
    expect(errorMsgLabelWrapper.hasClass('invisible')).toBe(false);

});
});

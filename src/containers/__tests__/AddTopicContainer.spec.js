import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import AddTopicContainer from '../AddTopicContainer';
import { createTopic } from '../../utils';
import * as types from '../../constants/ActionTypes';

jest.mock('node-uuid', () => {
  return {
    v4: jest.fn(() => 100)
  };
});

const mockState = {
  byId:
  {
    1: createTopic(1, 10, 20, 'test1'),
    2: createTopic(2, 33, 22, 'test2'),
    3: createTopic(3, 2, 13, 'test3'),
    4: createTopic(4, 55, 23, 'test4')
  },
  allIds: [1, 2, 3, 4]
};

const setup = () => {
  const mockStore = configureStore()(mockState);
  const wrapper = shallow(<AddTopicContainer store={mockStore} />);

  return {
    mockStore,
    wrapper
  };
};

describe('AddTopicContainer', () => {
  it('render correctly', () => {
    const { wrapper, mockStore } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should show an error that indicate the topic exceed 255 characters', () => {
  });
  const { wrapper } = setup();
  const errorMsgLabelWrapper = wrapper.find('.error').first();
  const form = wrapper.find('form').first();
  form.simulate('submit', {
    target: {
      value: 'a'.repeat(256)
    }
  });
  expect(errorMsgLabelWrapper.hasClass('invisible')).toBe(false);
});

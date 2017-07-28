import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TopicList from '../TopicList';
import Topic from '../Topic';
import createTopic from '../../utils';

/* eslint-disable react/jsx-filename-extension */
const setup = () => {
  const props = {
    topics: [
      createTopic(1, 23, 34, 'title1'),
      createTopic(2, 32, 43, 'title2'),
    ],
    onUpVoteCallBack: jest.fn(),
    onDownVoteCallBack: jest.fn(),
    fetchTopics: jest.fn(),
  };

  const wrapper = shallow(<TopicList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TopicList Component', () => {
  it('render correctly', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should properly fire `onUpVoteCallBack` or `onDownVoteCallBack` or `fetchTopics`when click any of child components',
    () => {
      const { wrapper, props } = setup();
      wrapper.find(Topic).forEach((component) => {
        component.prop('onUpVoteCallBack')();
        expect(props.onUpVoteCallBack).toHaveBeenCalled();

        component.prop('onDownVoteCallBack')();
        expect(props.onDownVoteCallBack).toHaveBeenCalled();
      });
    });
});

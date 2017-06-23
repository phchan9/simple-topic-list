import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import TopicListContainer from '../TopicListContainer';
import { createTopic } from '../../utils';
import * as types from '../../constants/ActionTypes';

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
  const wrapper = shallow(
    <TopicListContainer store={mockStore} />
  );

  return {
    mockStore,
    wrapper
  };
};

describe('TopicListContainer', () => {
  it('should get props as the sorted topic list from state', () => {
    const { wrapper } = setup();
    const expected = [
      createTopic(4, 55, 23, 'test4'),
      createTopic(2, 33, 22, 'test2'),
      createTopic(1, 10, 20, 'test1'),
      createTopic(3, 2, 13, 'test3')
    ];
    expect(wrapper.prop('topics')).toEqual(expected);

  });

  it('should dispatch an UpVote action when call props on the container', () => {
    const { mockStore, wrapper } = setup();
    const action = wrapper.props().onUpVoteCallBack(4);
    expect(action).toEqual({
      id: 4,
      type: types.UPVOTE_TOPIC
    });
  });

  it('should dispatch an DownVote action when call props on the container', () => {
    const { mockStore, wrapper } = setup();
    const action = wrapper.props().onDownVoteCallBack(3);
    expect(action).toEqual({
      id: 3,
      type: types.DOWNVOTE_TOPIC
    });
  });
});

import byId from '../byId';
import * as types from '../../constants/ActionTypes';
import { createTopic } from '../../utils';

const setupState = override => ({
  1: createTopic(1, 12, 23,
                 'test1'),
  2: createTopic(2, 33, 11,
                 'test2'),
  ...override
});

describe('byId reducer', () => {
  it('should handle ADD_TOPIC', () => {
    const action = {
      type: types.ADD_TOPIC,
      id: 3,
      upVotes: 41,
      downVotes: 2,
      title: 'Ask HN: This is test'
    };
    const prevState = setupState();
    const expected = {...prevState,
                      3: createTopic(3, 41, 2, 'Ask HN: This is test')};
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle UPVOTE_TOPIC', () => {
    const action = {
      type: types.UPVOTE_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = setupState({1: createTopic(1, 13, 23, 'test1')});
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle DOWNVOTE_TOPIC', () => {
    const action = {
      type: types.DOWNVOTE_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = setupState({1: createTopic(1, 12, 24, 'test1')});
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle default case', () => {
    const action = {
      type: types.RANDOM_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = prevState;
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

});

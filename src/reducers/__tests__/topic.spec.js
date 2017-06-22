import topic from '../topic';
import * as types from '../../constants/ActionTypes';

const setupState = override => ({
  id: 1,
  upVotes: 2,
  downVotes: 3,
  title: 'test title',
  ...override
});

describe('topic reducer', () => {
  it('should handle ADD_TOPIC', () => {
    const action = {
      type: types.ADD_TOPIC,
      id: 1,
      upVotes: 2,
      downVotes: 3,
      title: 'test title'
    };
    const actual = topic(undefined, action);
    const expected = setupState();
    expect(actual).toEqual(expected);
  });

  it('should handle UPVOTE_TOPIC', () => {
    const action = {
      type: types.UPVOTE_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = setupState({upVotes: 3});
    const actual = topic(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle DOWNVOTE_TOPIC', () => {
    const action = {
      type: types.DOWNVOTE_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = setupState({downVotes: 4});
    const actual = topic(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle default case', () => {
    const action = {
      type: types.RANDOMVOTE_TOPIC,
      id: 1
    };
    const prevState = setupState();
    const expected = setupState();
    const actual = topic(prevState, action);
    expect(actual).toEqual(expected);
  });
});

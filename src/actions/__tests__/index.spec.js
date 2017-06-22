import * as actions from '../index';
import * as types from '../../constants/ActionTypes';

// mock the dependency, node-uuid
jest.mock('node-uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

it('should create an action to add a topic', () => {
  const title = 'This is a title';
  const expected = {
    type: types.ADD_TOPIC,
    id: 1,
    upVotes: 0,
    downVotes: 0,
    title
  };
  expect(actions.addTopic(title)).toEqual(expected);
});

it('should create an action to upvote a topic', () => {
  const id = 1;
  const expected = {
    type: types.UPVOTE_TOPIC,
    id: 1
  };
  expect(actions.upVote(id)).toEqual(expected);
});

it('should create an action to downvote a topic', () => {
  const id = 1;
  const expected = {
    type: types.DOWNVOTE_TOPIC,
    id: 1
  };
  expect(actions.downVote(id)).toEqual(expected);
});

import { normalize } from 'normalizr';
import * as schema from '../../actions/schema';
import byId from '../byId';
import * as types from '../../constants/ActionTypes';
import createTopic from '../../utils';

const setup = ({ overrideState, overrideAction }) => {
  const state = {
    1: createTopic(1, 12, 23,
                 'test1'),
    2: createTopic(2, 33, 11,
                 'test2'),
    ...overrideState,
  };

  const topic = createTopic(3, 41, 2, 'Ask HN: This is test');

  const action = {
    payload: normalize(topic, schema.topic),
    ...overrideAction,
  };

  return {
    state,
    action,
    topic,
  };
};

describe('byId reducer', () => {
  it('should handle ADD_TOPIC', () => {
    const { action, state: prevState, topic } = setup(
      {
        overrideAction: {
          type: types.ADD_TOPIC,
        },
      },
    );
    const expected = { ...prevState, [topic.id]: topic };
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle UPVOTE_TOPIC', () => {
    const { action, state, topic } = setup(
      {
        overrideAction: {
          type: types.UPVOTE_TOPIC,
        },
      },
    );
    const oldTopic = { ...topic, upVotes: topic.upVotes - 1 };
    const prevState = { ...state, [oldTopic.id]: oldTopic };
    const expected = { ...prevState, [topic.id]: topic };
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle DOWNVOTE_TOPIC', () => {
    const { action, state, topic } = setup(
      {
        overrideAction: {
          type: types.UPVOTE_TOPIC,
        },
      },
    );
    const oldTopic = { ...topic, upVotes: topic.upVotes + 1 };
    const prevState = { ...state, [oldTopic.id]: oldTopic };
    const expected = { ...prevState, [topic.id]: topic };
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle default case', () => {
    const { action, state } = setup(
      {
        overrideAction: {
          type: types.RANDOM_TOPIC,
        },
      },
    );

    const prevState = { ...state };
    const expected = { ...prevState };
    const actual = byId(prevState, action);
    expect(actual).toEqual(expected);
  });
});

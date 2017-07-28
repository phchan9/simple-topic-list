import { normalize } from 'normalizr';
import * as schema from '../../actions/schema';
import { createTopic } from '../../utils';
import * as types from '../../constants/ActionTypes';
import allIds from '../allIds';

const setup = ({ overrideAction }) => {
  const topic = createTopic(4, 41, 2, 'Ask HN: This is test');

  const action = {
    payload: normalize(topic, schema.topic),
    ...overrideAction,
  };

  return {
    action,
    topic,
  };
};

describe('allIds reducer', () => {
  it('should handle ADD_TOPIC', () => {
    const { action, topic } = setup({
      overrideAction: {
        type: types.ADD_TOPIC,
      },
    });
    const prevState = [1, 2, 3];
    const expected = [1, 2, 3, topic.id];
    const actual = allIds(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle other case', () => {
    const { action } = setup({
      overrideAction: {
        type: types.UPVOTE_TOPIC,
      },
    });
    const prevState = [1, 2, 3];
    const expected = prevState;
    let actual = allIds(prevState, action);
    expect(actual).toEqual(expected);

    action.type = types.DOWNVOTE_TOPIC;
    actual = allIds(prevState, action);
    expect(actual).toEqual(expected);

    action.type = types.RANDOM_TOPIC;
    actual = allIds(prevState, action);
    expect(actual).toEqual(expected);
  });
});

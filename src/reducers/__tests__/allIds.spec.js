import { normalize } from 'normalizr';
import * as schema from '../../actions/schema';
import createTopic from '../../utils';
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
  it('should handle FETCH_TOPICS correctly when payload is wrong', () => {
    const { action, topic } = setup({
      overrideAction: {
        type: types.FETCH_TOPICS,
      },
    });
    action.payload = normalize(topic, schema.arrayOfTopics);
    const prevState = [1, 2, 3];
    const expected = prevState;
    const actual = allIds(prevState, action);
    expect(actual).toEqual(expected);

    action.payload = normalize({}, schema.arrayOfTopics);
    const anotherActual = allIds(prevState, action);
    expect(anotherActual).toEqual(expected);
  });

  it('should handle FETCH_TOPICS', () => {
    const { action, topic } = setup({
      overrideAction: {
        type: types.FETCH_TOPICS,
      },
    });
    action.payload = normalize([topic], schema.arrayOfTopics);
    const prevState = [1, 2, 3];
    const expected = [1, 2, 3, topic.id];
    const actual = allIds(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle ADD/RECEIVE_NEW_TOPIC when payload is wrong or duplicate id', () => {
    const { action } = setup({
      overrideAction: {
        type: types.RECEIVE_NEW_TOPIC,
      },
    });
    action.payload = normalize({}, schema.topic);
    const prevState = [1, 2, 3];
    const actual = allIds(prevState, action);
    expect(actual).toEqual(prevState);

    action.payload = normalize(
      createTopic(1, 23, 33, 'this is test for duplicate id'),
      schema.topic,
    );
    const anotherActual = allIds(prevState, action);
    expect(anotherActual).toEqual(prevState);
  });

  it('should handle RECEIVE_NEW_TOPIC', () => {
    const { action, topic } = setup({
      overrideAction: {
        type: types.RECEIVE_NEW_TOPIC,
      },
    });
    const prevState = [1, 2, 3];
    const expected = [1, 2, 3, topic.id];
    const actual = allIds(prevState, action);
    expect(actual).toEqual(expected);
  });

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

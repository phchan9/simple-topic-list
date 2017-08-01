import { normalize } from 'normalizr';
import * as actions from '../index';
import * as types from '../../constants/ActionTypes';
import createTopic from '../../utils';
import * as schema from '../schema';

// mock the dependency, axois
jest.mock('axios', () => {
  const topic = (id, upVotes, downVotes, title) => ({
    id,
    upVotes,
    downVotes,
    title,
  });

  const mockTopic = topic(1, 10, 10, 'whatever');
  return {
    post: jest.fn(() => Promise.resolve({ data: mockTopic })),
    get: jest.fn(() => Promise.resolve({
      data: [
        topic(1, 2, 3, 'post1'),
        topic(2, 2, 3, 'post2'),
      ],
    })),
    patch: jest.fn(() => Promise.resolve({ data: mockTopic })),
  };
});

const setup = (override) => {
  const title = 'whatever';
  const id = 1;
  const votes = 10;
  const retPayload = normalize(createTopic(id, votes, votes, title), schema.topic);
  const retArrayPayload = normalize([
    createTopic(1, 2, 3, 'post1'),
    createTopic(2, 2, 3, 'post2'),
  ], schema.arrayOfTopics);
  const topic = createTopic(3, 3, 3, 'post3');

  return {
    retPayload,
    retArrayPayload,
    id,
    title,
    votes,
    topic,
    ...override,
  };
};

describe('actions', () => {
  it('should create an action to receive new topic sent from server', () => {
    const { topic } = setup();
    const expected = {
      type: types.RECEIVE_NEW_TOPIC,
      payload: normalize(topic, schema.topic),
    };
    const actual = actions.receiveNewTopic(topic);
    expect(actual).toEqual(expected);
  });

  it('should create an action to receive updated topic sent from server', () => {
    const { topic } = setup();
    const expected = {
      type: types.RECEIVE_UPDATED_TOPIC,
      payload: normalize(topic, schema.topic),
    };
    const actual = actions.receiveUpdatedTopic(topic);
    expect(actual).toEqual(expected);
  });

  it('should create an action to fetch topics', () => {
    const { retArrayPayload } = setup();
    const { type, payload } = actions.fetchTopics();
    expect(type).toEqual(types.FETCH_TOPICS);
    payload.then(data => expect(data).toEqual(retArrayPayload));
  });

  it('should create an action to add a toic', () => {
    const { retPayload, title } = setup();
    const { type, payload } = actions.addTopic(title);
    expect(type).toEqual(types.ADD_TOPIC);
    payload.then(data => expect(data).toEqual(retPayload));
  });

  it('should create an action to upvote a toic', () => {
    const { retPayload, id, votes } = setup();
    const { type, payload } = actions.upVote(id, votes);
    expect(type).toEqual(types.UPVOTE_TOPIC);
    payload.then(data => expect(data).toEqual(retPayload));
  });

  it('should create an action to downvote a toic', () => {
    const { retPayload, id, votes } = setup();
    const { type, payload } = actions.downVote(id, votes);
    expect(type).toEqual(types.DOWNVOTE_TOPIC);
    payload.then(data => expect(data).toEqual(retPayload));
  });
});

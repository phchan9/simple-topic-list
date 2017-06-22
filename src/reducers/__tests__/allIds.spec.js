import * as types from '../../constants/ActionTypes';
import allIds from '../allIds';

describe('allIds reducer', () => {
  it('should handle ADD_TOPIC', () => {
    const action = {
      type: types.ADD_TOPIC,
      id: 4
    };
    const prevState = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = allIds(prevState, action);
    expect(actual).toEqual(expected);
  });

  it('should handle other case', () => {
    let action = {
      type: types.UPVOTE_TOPIC,
      id: 4
    };
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

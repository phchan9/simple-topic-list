import store from '../configureStore';
import { createTopic } from '../../utils';

// mock the return value of `v4` serially
jest.mock('node-uuid', () => {
  return {
    v4: jest.fn()
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 3)
      .mockImplementationOnce(() => 4)
  };
});

it('should initialize', () => {
  const actual = store.getState();
  const expected = {
    byId: {
      1: createTopic(1, 12, 23,
                     'Things you should know before using AWS’s Elasticsearch Service'),
      2: createTopic(2, 33, 11,
                     'Cannabis reverses aging processes in the brain'),
      3: createTopic(3, 41, 2,
                     'Ask HN: How secure is the encryption offered by OS X\'s Disk Utility?'),
      4: createTopic(4, 8, 3,
                     'The world\'s largest library of historical European martial arts books')
    },
    allIds: [1, 2, 3, 4]
  };

  expect(actual).toEqual(expected);
});

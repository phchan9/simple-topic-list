import { getAllSortedTopicList } from '../index';
import createTopic from '../../utils';

describe('selectors in the root reducer', () => {
  it('should get all sorted topic list increasingly by upvote', () => {
    const state = {
      byId:
      {
        1: createTopic(1, 10, 20, 'test1'),
        2: createTopic(2, 33, 22, 'test2'),
        3: createTopic(3, 2, 13, 'test3'),
        4: createTopic(4, 55, 23, 'test4'),
      },
      allIds: [1, 2, 3, 4],
    };

    const expected = [
      createTopic(4, 55, 23, 'test4'),
      createTopic(2, 33, 22, 'test2'),
      createTopic(1, 10, 20, 'test1'),
      createTopic(3, 2, 13, 'test3'),
    ];

    expect(getAllSortedTopicList(state)).toEqual(expected);
    expect(getAllSortedTopicList({ byId: {}, allIds: [] })).toEqual([]);
  });
});

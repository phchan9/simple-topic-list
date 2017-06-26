import { createTopic } from '../index';

describe('createTopic utility function', () => {
  it('should work correctly', () => {
    const actual = createTopic(1, 12 , 23, 'test1 title');
    const expected = {
      id: 1,
      upVotes: 12,
      downVotes: 23,
      title: 'test1 title'
    };
    expect(actual).toEqual(expected);
  });
});;

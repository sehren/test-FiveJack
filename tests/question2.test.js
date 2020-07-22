const solution = require('../question 2/solution2');

test('returns the number of the stage in descending order of highest failure rate', () => {
  const N = 5;
  const users = [2, 1, 2, 6, 2, 4, 3, 3];
  const answer = [3, 4, 2, 1, 5];
  expect(solution(N, users)).toEqual(answer);
});

test('returns the number of the stage in descending order of highest failure rate', () => {
  const N = 4;
  const users = [4, 4, 4, 4];
  const answer = [4, 1, 2, 3];
  expect(solution(N, users)).toEqual(answer);
});

test('returns the number of the stage in descending order of highest failure rate', () => {
  const N = 3;
  const users = [2, 1, 1, 4];
  const answer = [1, 2, 3];
  expect(solution(N, users)).toEqual(answer);
});

describe('throw an error', () => {
  it('should failed if N is not between 1 and 500', () => {
    const N = 4000;
    const users = [2, 1, 2, 6, 2, 4, 3, 3];
    expect(() => solution(N, users)).toThrow(Error);
  });
  it('should failed if total users is zero or more than 200000', () => {
    const N = 5;
    const users = [];
    expect(() => solution(N, users)).toThrow(Error);
  });
});

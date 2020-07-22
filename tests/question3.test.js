const solution = require('../question 3/solution3');

test('returns the number of the stage in descending order of highest failure rate', () => {
  const relation = [['100', 'ryan', 'music', '2'], ['200', 'apeach', 'math', '2'], ['300', 'tube', 'computer', '3'], ['400', 'con', 'computer', '4'], ['500', 'muzi', 'music', '3'], ['600', 'apeach', 'music', '2']];
  const answer = 2;
  expect(solution(relation)).toEqual(answer);
});



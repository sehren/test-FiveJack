const solution = require('../question 1/solution1');

test('returns chat log (first dummy record)', () => {
  const record = [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ];
  const answer = [
    'Prodo came in.',
    'Ryan came in.',
    'Prodo has left.',
    'Prodo came in.',
  ];
  expect(solution(record)).toEqual(answer);
});

test('returns chat log (second dummy record)', () => {
  const record = [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Change uid4567 Ryan',
  ];
  const answer = ['Muzi came in.', 'Ryan came in.', 'Muzi has left.'];
  expect(solution(record)).toEqual(answer);
});

test('returns chat log (third dummy record)', () => {
  const record = [
    'Enter uid1234 Muzi',
    'Leave uid1234',
    'Enter uid4567 Prodo',
    'Change uid4567 Ryan',
  ];
  const answer = ['Muzi came in.', 'Muzi has left.', 'Ryan came in.'];
  expect(solution(record)).toEqual(answer);
});

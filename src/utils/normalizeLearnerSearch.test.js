import normalizeLearnerSearch from './normalizeLearnerSearch';

describe('normalizeLearnerSearch', () => {
  test.each([
    ['  Bob@open.edu.kz  ', 'Bob@open.edu.kz'],
    ['  Әлихан\u00a0\u00a0Ержанұлы\t.edu  ', 'Әлихан Ержанұлы .edu'],
    ['.bob_user+123', '.bob_user+123'],
    [' \t\n ', ''],
    [null, ''],
    [undefined, ''],
  ])('normalizes %p without changing identity characters', (input, expected) => {
    expect(normalizeLearnerSearch(input)).toEqual(expected);
  });
});

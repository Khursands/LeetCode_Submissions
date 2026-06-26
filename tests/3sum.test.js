const threeSum = require('../15-3sum/3sum');

/** Order-independent comparison of triplet arrays. */
function normalize(triplets) {
  return triplets
    .map((t) => [...t].sort((a, b) => a - b).join(','))
    .sort();
}

describe('15. 3Sum', () => {
  test('finds all unique triplets that sum to zero', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(normalize(result)).toEqual(normalize([[-1, -1, 2], [-1, 0, 1]]));
  });

  test('returns no triplets when none sum to zero', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  test('handles all zeros as a single triplet', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test('de-duplicates repeated triplets', () => {
    const result = threeSum([-2, 0, 0, 2, 2]);
    expect(normalize(result)).toEqual(normalize([[-2, 0, 2]]));
  });

  test('returns empty for inputs shorter than three', () => {
    expect(threeSum([])).toEqual([]);
    expect(threeSum([1, -1])).toEqual([]);
  });

  test('does not contain duplicate triplets', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
    const serialized = normalize(result);
    expect(new Set(serialized).size).toBe(serialized.length);
  });
});

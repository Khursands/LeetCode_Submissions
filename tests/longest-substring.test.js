const lengthOfLongestSubstring = require('../3-longest-substring-without-repeating-characters/longest-substring-without-repeating-characters');

describe('3. Longest Substring Without Repeating Characters', () => {
  test.each([
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['', 0],
    [' ', 1],
    ['au', 2],
    ['dvdf', 3],
    ['tmmzuxt', 5],
  ])('lengthOfLongestSubstring(%j) === %i', (input, expected) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });

  test('handles a single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  test('handles a fully unique string', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });
});

const myAtoi = require('../8-string-to-integer-atoi/string-to-integer-atoi');

const INT_MAX = 2 ** 31 - 1; //  2147483647
const INT_MIN = -(2 ** 31); // -2147483648

describe('8. String to Integer (atoi)', () => {
  test('parses a plain number', () => {
    expect(myAtoi('42')).toBe(42);
  });

  test('skips leading whitespace and applies a negative sign', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  test('stops at the first non-digit', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  test('returns 0 when the string does not start with a number', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });

  test('handles an explicit plus sign', () => {
    expect(myAtoi('+13')).toBe(13);
  });

  test('clamps to INT_MAX on positive overflow', () => {
    expect(myAtoi('91283472332')).toBe(INT_MAX);
  });

  test('clamps to INT_MIN on negative overflow', () => {
    expect(myAtoi('-91283472332')).toBe(INT_MIN);
  });

  test('returns 0 for empty / whitespace-only input', () => {
    expect(myAtoi('')).toBe(0);
    expect(myAtoi('     ')).toBe(0);
  });

  test('treats a lone sign as 0', () => {
    // `+ 0` normalizes signed zero (-0 → 0) so Object.is in toBe matches.
    expect(myAtoi('+') + 0).toBe(0);
    expect(myAtoi('-') + 0).toBe(0);
  });
});

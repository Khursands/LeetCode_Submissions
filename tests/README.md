# LeetCode — Unit Tests (Jest)

Unit tests for the solutions in this repo. Browser automation doesn't apply to
pure algorithm code, so these are fast, deterministic **Jest** tests focused on
correctness and edge cases.

## Coverage
| Problem | Spec | Notable cases |
|---|---|---|
| 3. Longest Substring Without Repeating Characters | `longest-substring.test.js` | empty, single char, repeats, sliding-window edge (`tmmzuxt`) |
| 8. String to Integer (atoi) | `atoi.test.js` | signs, leading spaces, trailing words, INT_MIN/INT_MAX clamping, lone sign |
| 15. 3Sum | `3sum.test.js` | zeros, de-duplication, no-solution, short input |

Each solution exports its function via a guarded
`if (typeof module !== 'undefined') module.exports = ...` line that the LeetCode
judge ignores but Jest can import.

## Running
```bash
npm install
npm test
npm run test:coverage
```

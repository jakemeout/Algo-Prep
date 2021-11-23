/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/consecutive-characters/submissions/
 */
const maxPower = (s) => {
  let i = 0;
  let j = 0;
  let maxRep = 0;
  let count = 0;

  while (j < s.length) {
    if (s[j] === s[i]) {
      count += 1;
      maxRep = Math.max(maxRep, count);
      j++;
    } else {
      count = 0;
      i++;
    }
  }
  return maxRep;
};

s = "abbcccddddeeeeedcba";
console.log(JSON.stringify(maxPower(s)));

/* Approach:
 *  - sliding window of longest repeating character
 *  s = "abbcccddddeeeeedcba"
 *         i
 *.        j
 */

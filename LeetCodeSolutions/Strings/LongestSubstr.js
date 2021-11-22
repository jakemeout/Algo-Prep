/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Approach:
 *   - while looping over the array, look at the element a step ahead, if the element is different, add the element to a new string
 *   -  check to see if the element is in the string before putting it in the string.
 */

const lengthOfLongestSubstring = (s) => {
  let str = [];

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1] && !str.includes(s[i])) {
      str.push(s[i]);
    } else if (!str.includes(s[i])) {
      str.push(s[s.length - 1]);
    }
  }
  return str.length;
};

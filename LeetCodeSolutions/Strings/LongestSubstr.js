/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Input: s = "abcabcbb"
 *              ^
 *              ^
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Approach:
 *   - Sliding windows. Set both pointers to the first element and expand the window based on the condition of non repeating characters
 *     find the longest window. 
 *   - Using a Set we can create a unique set of non repeating characters and check the set for the character,
 *     if it doesn't have the character add it to the set, then check the size, and get the max size of the window between i & J
 *     if the letter already exists increment i to keep moving through the str and find the next set of unique non repeating characters. 
 *   
 */

const lengthOfLongestSubstring = (s) => {
  let i = 0;
  let j = 0;
  let hashSet = new Set();
  let maxWindow = 0;

  while (j < s.length) {
    if (!hashSet.has(s[j])) {
      hashSet.add(s[j]);
      maxWindow = Math.max(hashSet.size, maxWindow);
      j++;
    } else {
      hashSet.delete(s[i]);
      i++;
    }
  }
  return maxWindow;
};

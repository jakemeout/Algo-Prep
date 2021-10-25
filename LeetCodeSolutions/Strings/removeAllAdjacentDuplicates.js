/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *
 * You are given a string s consisting of lowercase English letters.
 * A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made.
 * It can be proven that the answer is unique.
 *
 * Example 1:
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal,
 * and this is the only possible move.  The result of this move is that the string is "aaca",
 * of which only "aa" is possible, so the final string is "ca".
 *
 *  strategy:
 *  - Use a stack to track the current character and if the stack's current character that is being checked
 *     is in the string
 * Big O
 *   - O(n) Space n is the input array + the stack
 *   - O(n) Time complexity where you are iterating over the string and the stack
 */
const removeDuplicates = (s) => {
  const stack = [];

  for (const letter of s) {
    console.log(stack);
    stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter);
  }
  return stack.join("");
};

const str = "ssfffdfdddhjkhsg";
console.log(JSON.stringify(removeDuplicates(str)));

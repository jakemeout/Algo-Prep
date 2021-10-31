/**
 * You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them,
 * causing the left and the right side of the deleted substring to concatenate together.
 * We repeatedly make k duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
 * Example 1:
 *  Input: s = "abcd", k = 2
 *  Output: "abcd"
 *  Explanation: There's nothing to delete.
 *
 * Example 2:
 *  Input: s = "deeedbbcccbdaa", k = 3
 *  Output: "aa"
 *  Explanation: First delete "eee" and "ccc", get "ddbbbdaa"
 *  Then delete "bbb", get "dddaa"
 *  Finally delete "ddd", get "aa"
 *
 * Example 3:
 *  Input: s = "pbbcggttciiippooaais", k = 2
 *  Output: "ps"
 *
 * Strategy:
 *  - Track the characters and its count using a stack
 *  - If the character is in the bottom of the stack, meaning we have a duplicate, increment its count by 1
 *  - If not a dup, append it to the stack with count of 1
 *  - If the character's count equals to k, removing it by pop this element off the stack
 *  - For everything that's remained in the stack, iterate over and repeat base on its count
 *
 * Big O:
 *  -
 *
 */
const removeDuplicates = (s, k) => {
  const stack = [];
  for (const letter of s) {
    if (stack.length && stack[stack.length - 1][0] === letter) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([letter, 1]);
    }
  }
  let res = "";

  for (let [letter, count] of stack) {
    // .repeat() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    //
    res += letter.repeat(count);
  }
  return res;
};

const s = "pbbcggttciiippooaais",
  k = 2;

console.log(JSON.stringify(removeDuplicates(s, k)));

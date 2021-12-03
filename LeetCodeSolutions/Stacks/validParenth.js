/**
 * https://leetcode.com/problems/valid-parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    if (s[i] === "(") stack.push(")");
    else if (s[i] === "{") stack.push("}");
    else if (s[i] === "[") stack.push("]");
    else if (stack.pop() !== s[i]) return false;
  }
  return stack.length === 0;
};
/*
    push the balanced pair of the character to the stack
    if when popping the stack, it doesn't equal the current character, 
        you know you have an imbalanced pair
    return false if imbalanced
    if the stack is empty than you know you have balanced pairs, so return true or stack.length ===0 is true.
*/

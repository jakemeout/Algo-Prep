const generateParenthesis = (n) => {
  let arr = [],
    left = 0,
    right = 0,
    str = ""; // Capture the str at each loop
  backTracking(arr, n, str, left, right);
  return arr;
};

const backTracking = (arr, n, str, left, right) => {
  if (str.length === n * 2) {
    arr.push(str);
    return;
  }
  if (left < n) {
    console.log(str)
    backTracking(arr, n, str + "(", left + 1, right);
  }
  if (right < left) {
    console.log(str)
    backTracking(arr, n, str + ")", left, right + 1);
  }
};
console.log(JSON.stringify(generateParenthesis(3)));
/**
 * Backtracking:
 *  - At each state/loop place a  "(" or a ")"
 *  - Constraint / Rule - Cannot close until we have an open parenth
 *  - Goal is to place n*2 characters. String length should be 6, that string gets added to array
 *      and create new possible combinations
 * 
 *  Rule: 
 *  - There can only be a right parenthesis if the left has been added (right <  right)
 *  - There has to be n left parenthesis
 * 
 * Conditions for building the string
 *  - If there are less left parenthesis than the mmax allowed parenthesis 
 *    add a left parenthesis "(" and go to the next decision adding 1 to the left since you have
 *    added a parenthesis. 
 *  - If there are less right parenthesis than left you can add a right parenthesis and increment the count of right
 *    since you added a right parenthesis
 * 
 */

/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/ 

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


EXAMPLE-1:
	Input: digits = "23"
	Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

EXAMPLE-2:
	Input: digits = ""
	Output: []

EXAMPLE-3:
	Input: digits = "2"
	Output: ["a","b","c"]


*/

const solution = (digits) => {
  const result = [];

  if (!digits.length) return result;

  const keyPad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // loop over arrays of digits (23) === ["a","b","c"], ["d","e","f"]
  // for each element run a loop over the array as long as it isn't the given array.
  // for loop over first character of each keyPad entry and recursively create combinations based on digits length and

  const combos = (combo, startPt) => {
    if (startPt === digits.length) {
      result.push(combo);
      return;
    }

    for (let letter of keyPad[digits[startPt]]) {
      combos(combo + letter, startPt + 1);
    }
  };

  combos("", 0, digits);

  return result;
};

const exampleOneDigits = "2345";
console.log("EX-1:", solution(exampleOneDigits));
const exampleTwoDigits = "";
//console.log('EX-2:', solution(exampleTwoDigits));

const exampleThreeDigits = "2";
//console.log('EX-3:', solution(exampleThreeDigits));

// Loop over array in recursion
const recurse = (words, i = 0) => {
  if (words[i] === "poop") {
    return console.log("hi!");
  }
  recurse(words, i + 1);
};

const words = ["poopy", "doopy", "poop"];

console.log(recurse(words));

// Palindrome

const isPalindrome = (input) => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  if (input.charAt(0) === input.charAt(input.length - 1)) {
    return isPalindrome(input.substring(1, input.length - 1));
  }

  return false;
};

console.log(isPalindrome("poop"))
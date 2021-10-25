/**
 * https://leetcode.com/problems/two-sum/
 * Easy
 *
 * Strategy:
 *   - As we move through the array subtract the target from the element in the array.
 *   - Create a hashmap where you check if the difference is in the hashmap
 *      if it is, then return the value at the given key in the hashmap (the index of the diff el)
 *      and the el you are currently iterating over.
 *   - Otherwise, return an empty array when the loop is done, meaning none of the elements add upto
 *      the target
 * 
 *  Big O:
 *   - Time Complexity is O(n)- n is the size of the input
 *   - Space Complexity is O(n) - n is the hashmap ( input + hashmap)
 */

const twoSum = (nums, target) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in numMap) {
      return [numMap[diff], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
};

// const nums = [2,7,11,15];
// const target = 9;
// console.log(twoSum(nums,target))

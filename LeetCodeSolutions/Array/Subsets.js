const subsets = (nums) => {
  const res = [];

  const generateSubsets = (curr, idx) => {
    res.push(curr);
    for (let i = idx; i < nums.length; i++) {
      console.log("kylie");
      generateSubsets(curr.concat(nums[i]), i + 1);
    }
  };
  generateSubsets([], 0);
  return res;
};
const nums = [1, 2, 3];
console.log(JSON.stringify(subsets(nums)));

//solution two form neetcode

const result = [];

//idx is the node we are visiting
const subset = [];
const backtracking = (idx) => {
  if (idx >= nums.length) {
    result.push([...subset]);
    return;
  }
  subset.push(nums[idx]);
  backtracking(idx + 1);
  subset.pop();
  backtracking(idx + 1);
};
backtracking(0);
return result;
// stack = [[],[1]]

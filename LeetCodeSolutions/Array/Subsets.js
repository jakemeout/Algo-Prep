const subsets = (nums) => {
    const res = [];
   
    const generateSubsets = (curr,idx) => {
        res.push(curr);
        for(let i = idx; i<nums.length; i++){
            console.log("kylie")
            generateSubsets(curr.concat(nums[i]), i + 1);
        }
    }
  generateSubsets([],0);
  return res
 
};
const nums = [1,2,3]
console.log(JSON.stringify(subsets(nums)));



// stack = [[],[1]]

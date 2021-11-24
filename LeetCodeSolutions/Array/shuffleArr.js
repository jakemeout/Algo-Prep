/** https://leetcode.com/problems/shuffle-an-array
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
   const len = this.nums.length
    newArr = []
    let idx = 0;
    while(newArr.length < len && newArr !== this.nums){
        idx = Math.floor(Math.random() * len);
        if(!newArr.includes(this.nums[idx])){
            newArr.push(this.nums[idx])
        } else {
            idx = Math.floor(Math.random() * len);
        }
    }
    return newArr
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle() 
 */
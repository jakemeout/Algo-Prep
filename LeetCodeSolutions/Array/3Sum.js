/**
 * @param {number[]} nums
 * @return {number[][]}
   Approach: 
    Sort the array
    Loop through the elements of the array. 
    While processing nums[i], use 2 pointer approach to find 2 such elements nums[left] and nums[right] so that nums[i]+nums[left]+nums[right] = 0
    if the sum of 3 elements is less than 0 than increment left pointer
    else decrement right pointer 
 */


    const threeSum = (nums) => {
        let res = [];
        
        
        if (nums.length < 3) {
            return res;
        }
        
        nums.sort((a,b) => a-b);
        
        for(let i = 0; i < nums.length - 2; i++){
            if(i=== 0 || (i > 0 && nums[i] != nums[i-1])){
                
               let left = i+1;
               let right = nums.length - 1;
               const sum = 0 - nums[i];
                
               while(left < right){
                   
                    if(nums[left] + nums[right] === sum){
                        res.push([nums[i],nums[left],nums[right]])
        
                     
                        
                        // skip over duplicates
                        while(left < right && nums[left] === nums[left + 1]) left++;
                        while(left < right && nums[right] === nums[right - 1]) right--;
                        left++;
                        right--;
                        
                    } else if (nums[left] + nums[right] > sum){
                        right--;
                    } else {
                        left++;
                    }
                }
            }
        }
        return res
    };
    
    console.log(/**
 * @param {number[]} nums
 * @return {number[][]}
   Approach: 
    Sort the array
    Loop through the elements of the array. 
    While processing nums[i], use 2 pointer approach to find 2 such elements nums[left] and nums[right] so that nums[i]+nums[left]+nums[right] = 0
    if the sum of 3 elements is less than 0 than increment left pointer
    else decrement right pointer 
 */


const threeSum = (nums) => {
    let res = [];
    
    
    if (nums.length < 3) {
		return res;
    }
    
    nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length - 2; i++){
        if(i=== 0 || (i > 0 && nums[i] != nums[i-1])){
            
           let left = i+1;
           let right = nums.length - 1;
           const sum = 0 - nums[i];
            
           while(left < right){
               
                if(nums[left] + nums[right] === sum){
                    res.push([nums[i],nums[left],nums[right]])
    
                 
                    
                    // skip over duplicates
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                    
                } else if (nums[left] + nums[right] > sum){
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return res
};

/*
[-1,0,1,2,-1,-4]

sorted
[-4 ,-1, -1, 0, 1, 2]
  i   j            k
 
 
 [-1,-1,1,0]
   i  j   k
 
 
 [[-1,-1,2],[-1,0,1]]
 
*/
)
    /*
    [-1,0,1,2,-1,-4]
    
    sorted
    [-4 ,-1, -1, 0, 1, 2]
      i   L            R
     
     
     [-1,-1,1,0]
       i  L   R
     
     
     [[-1,-1,2],[-1,0,1]]
     
    */
    
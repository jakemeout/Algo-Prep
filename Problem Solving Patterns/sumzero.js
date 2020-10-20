//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0. 
// Return an array that includs both values that sum to zero or undefined if a pair does not exist.


//Approach: It is sorted, and we are looking for something that sum zero. 
const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right --;
        } else {
            left ++;
        }
    }

}

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined

//Write a function called same, which accepts two arrays. 
//The function should return true if every value in the array has it's corresponding value squared in the second array. 
//The frequency of values must be the same. 


const same = (a,b) => {
 if(a.length !== b.length){
     return false;
    }
    for(let i = 0; i < a.length;i++){
        let correctIndex = b.indexOf(a[i] ** 2);
        if(correctIndex === -1){
            return false;
        }
        b.splice(correctIndex,1)
    }
    return true;
}


same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,3], [4,4,1]) // false (must be the same frequency)


//REFACTORED


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11]) //true
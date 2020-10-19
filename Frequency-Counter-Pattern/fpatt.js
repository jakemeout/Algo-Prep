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
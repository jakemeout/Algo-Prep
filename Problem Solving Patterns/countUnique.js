//Implement a function called countUniqueValues, which accepts a sorted array, and
//counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted


const countUniqueValues = () => {
        if (arr.length <= 1){
            return 0;
        }
        let i = 0;
        let j = 1;
          while (j < arr.length) {
              if( arr[i] === arr[j]) {
                  j ++;
              }else if(arr[i] !== arr[j]){
                  i++;
                  arr[i] = arr[j];
              }
          }
          return i + 1;
      }

countUniqueValues([1,1,1,1,1,2])
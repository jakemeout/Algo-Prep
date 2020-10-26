
// Optimized BubbleSort with noSwaps
function selectionSort(arr){
  for(let i=0; i<arr.length; i++){
      let lowest = i;
      for(let j = i+1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }

      if(i !== lowest){
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
      

  }
    return arr;
  }

  selectionSort([34,22,10,19,17])

  //Not terribly efficient - Time Complexity is as the length of the array grows
  //The number of the comparison grows N^2 
  // If you want to minimize the number of swaps you are making, you would use Selection sort
  //You iterate and compare alot but you don't swap as much.
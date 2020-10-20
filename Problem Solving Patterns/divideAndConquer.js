//Dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity


//Binary search example

//Given a sorted array of integers, write a function called search, that accepts a value and returns
//the index where the value passed to the function is located. if the value is not found, return -1

const search = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] <val) {
            min = middle + 1;
        }
        else if (array[middle] > val){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}
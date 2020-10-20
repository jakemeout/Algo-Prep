//Given Two strings, write a function to determine if the second string is an anagram of the first. 
//An anagram is  a word, phrase, or name formed by rearranging the letters of another, such, as cinemo, formed from iceman.

//My solution
const validAnagram = (str1, str2) => {
    let strA = str1.split("").sort().join("")
    let strB = str2.split("").sort().join("")

    if(strA.length !== strB.length){
        return false;
    }
    if(strA === strB){
        return true;
    }else{
        return false;
    }
}


validAnagram("","") // true
validAnagram('aaz', 'zza') //false
validAnagram("rat", "car") // false
validAnagram("race", "erac") //true

//Colts

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

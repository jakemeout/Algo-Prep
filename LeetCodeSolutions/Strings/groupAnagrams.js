/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const sortMap = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    word = word.split("");
    word.sort();
    word = word.join("");
    if (!(word in sortMap)) {
      sortMap[word] = [strs[i]];
    } else {
      sortMap[word].push(strs[i]);
    }
  }

  return Object.values(sortMap);
};

const strs = ["eat","tea","tan","ate","nat","bat"]

console.log(JSON.stringify(groupAnagrams(strs)))

/*
 strs = ["eat","tea","tan","ate","nat","bat"]
 [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]

 { 
    aet: [ 'eat', 'tea', 'ate' ], 
    ant: [ 'tan', 'nat' ], 
    abt: [ 'bat' ] 
 }

 looping over strs, sort each word in strs and set the word to the sorted word as a key

 return the values of the each sorted word
 
*/

/**
 * 79. Word Search
Medium

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [
	["A","B","C","E"],
	["S","F","C","S"],
	["A","D","E","E"],
] 
word = "ABCCED"
            ^
Output: true
Example 2:word = "ABCCED"



Input: board = [
	["A","B","C","E"],
	["S","F","C","S"],
	["A","D","E","E"],
	]
word = "SEE"
Output: true
Example 3:


Input: board = [
	["A","B","C","E"], board.length 3 board[0].length
	["S","F","C","S"],
	["A","D","E","E"]
]
word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

TRICKS (don't get me):
  - Check the character from word if next character is adjecent keep going if it isn't go back and keep iterating until we find adjacent or until end and its false
  - If you have visited an item, mark that you have visted it because you can't use it again and go back and say its adjacent aba(b)
 */

  const wordSearch = (board, word) => {
	const dfs = (board, i, j, word) => {
		let outOfBounds = i < 0 || j < 0 || i >= board.length || j >= board[0].length

		console.log((!outOfBounds && board[i][j]), word)
		if(!outOfBounds && (board[i][j] === word[0])){
			if(word.length === 1){
				console.log(board)
				return true
			}
			let currentCharacter = board[i][j]
			board[i][j] = "-" // traversed
			const y = dfs(board, i+1, j, word.substring(1)) ||
			dfs(board, i, j+1, word.substring(1)) ||
			dfs(board, i-1, j, word.substring(1)) ||
			dfs(board, i, j-1, word.substring(1)) 
			
			board[i][j] = currentCharacter
			return y
		}
	}

	for(let i = 0; i < board.length; i++){
		let row = board[i]
		for(let j = 0; j < row.length; j++){
			if(board[i][j] === word[0]){
				if(dfs(board, i, j, word)) return true 
			} 
		}
	}
	console.log(board)
	return false
}


const board = [
	["A","B","C","E"],
	["S","F","C","A"],
	["A","D","E","E"],
]

const board2 = [
	["C","A","A"],
	["A","A","A"],
	["B","C","D"],
]

const board3 = [
	["A","B","C","E"],
	["S","F","C","S"],
	["A","D","E","E"]
]

const word = "ABCCED"; // true
const word2 = "AAB"; // true
const word3 = "ABCB"; // false
console.log(wordSearch(board, word))


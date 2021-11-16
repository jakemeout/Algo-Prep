/**
 * Solve a Sudoku Problem and structure of a backtracking / recursive function
 * https://www.youtube.com/watch?v=Zq4upTEaQyM
 *
 *
 * https://leetcode.com/problems/sudoku-solver/
 *
 *
 *  Goal fill a cell in a row/column. 
 *  Choice: 
 *      - Compartimentalize into smaller problems
 *      - Choice at every single cell is to chose a number 1-9. 
 *          - Decision space from 1-9
 *  if there is an empty cell put in a number from 1-9
 */

const solveSudoku = (board) => {

    const solve = (row,col) => {
        if(col == board[row].length){
            
        }

        for(let value = 1; value <= 9; value++){
            board[row][col] = value;
            if(validPlacement(row,col)){
                if(solve(row, col + 1 , board)){
                    return true
                }
            }
        }
    }

};





const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];

//  Expected Output: [
//     ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
//     ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
//     ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
//     ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
//     ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
//     ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
//     ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
//     ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
//     ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
//   ];
const exist = (board, word) => {

    const dfs = (board, w, row, col) => {
        if()
    }

    for(let i = 0; i < board.length; i++){
        for(j=0; j < board[i].length; j++){
            if(word[0] === board[i][j]){
                dfs(board,word,i,j);
            }
        }
    }
}


console.log(JSON.stringify(exist(board, word)))

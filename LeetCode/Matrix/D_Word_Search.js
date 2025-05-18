/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// https://leetcode.com/problems/word-search/

var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const wordLen = word.length;
    const visited = Array(m).fill(null).map(() => Array(n).fill(false));
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    function DFS(index, row, col) {
        if (index === wordLen) {
            return true;
        }

        if (row < 0 || row >= m || col < 0 || col >= n || visited[row][col] || board[row][col] !== word[index]) {
            return false;
        }

        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            const newRow = row + dy[i];
            const newCol = col + dx[i];
            if (DFS(index + 1, newRow, newCol)) {
                return true;
            }
        }

        visited[row][col] = false; // 백트래킹: 방문 상태 해제
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (DFS(0, i, j)) {
                    return true;
                }
            }
        }
    }

    return false;
};

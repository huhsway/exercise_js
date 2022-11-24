// https://yganalyst.github.io/training/algo_tr_ect_1/ 

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const graph = input.map((line) => line.split('').map(Number));

function dfs(y, x) {
    if (y <= -1 || y >= n || x <= -1 || x >= m) {
        return false
    }

    if (graph[y][x] === 0) {
        graph[y][x] = 1
        dfs(y - 1, x)
        dfs(y, x - 1)
        dfs(y + 1, x)
        dfs(y, x + 1)
        return true
    }

    return false
}

let result = 0
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (dfs(i, j) === true) {
            result += 1
        }
    }
}
console.log(result)

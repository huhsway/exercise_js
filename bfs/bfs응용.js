const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const graph = input.map((line) => line.split('').map(Number));

const dy = [-1, 1, 0, 0]
const dx = [0, 0, -1, 1]

function bfs(y, x) {
    const queue = []
    queue.push({ y: y, x: x })
    
    while (queue.length) {
        const { y, x } = queue.shift()
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i]
            const nx = x + dx[i]

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                continue
            }

            if (graph[ny][nx] === 0) {
                continue
            }

            if (graph[ny][nx] === 1) {
                graph[ny][nx] = graph[y][x] + 1
                queue.push({ y: ny, x: nx })
            }

        }

    }

    return graph[n-1][m-1]
}

console.log(bfs(0,0))
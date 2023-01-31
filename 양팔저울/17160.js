// https://www.acmicpc.net/problem/17610

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/input_17160.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0]
const weights = input[1].split(' ').map((it) => Number(it));

const sumValue = weights.reduce((acc, cur) => acc += cur)
const arr = Array(sumValue + 1).fill(false);
arr[0] = true

function dfs(depth, weights, weight, n) {
    if (depth === n) {
        if (weight > 0) {
            arr[weight] = true
        }
        return
    } else {
        dfs(depth + 1, weights, weight + weights[depth], n);
        dfs(depth + 1, weights, weight - weights[depth], n);
        dfs(depth + 1, weights, weight, n)
    }
}

dfs(0, weights, 0, n)

console.log(arr.filter((it) => it === false).length)

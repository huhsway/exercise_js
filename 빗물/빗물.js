// https://www.acmicpc.net/problem/14719

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

function solution(n, m, arr) {

    let left = 0, right = arr.length - 1;
    let leftMax = arr[left], rightMax = arr[right];
    let result = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, arr[left]);
        rightMax = Math.max(rightMax, arr[right]);

        if (leftMax <= rightMax) {
            result += leftMax - arr[left];
            left += 1;
        }
        
        else {
            result += (rightMax - arr[right]);
            right -= 1;
        }
    }

    return result;
}

console.log(solution(n,m,arr))
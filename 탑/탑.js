// https://www.acmicpc.net/problem/2493

let [n, strings] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');

function solution(n, strings) {
    const arr = strings.split(' ').map(Number);
    const stack = [];
    const answer = [];

    stack.push({
        h: arr[0],
        idx: 1,
    })

    answer.push(0)

    for (let i = 1; i < n; i++) {

        while (stack.length) {
            if (stack[stack.length - 1].h < arr[i]) {
                stack.pop();
            }
            else {
                answer.push(stack[stack.length - 1].idx)
                stack.push({
                    h: arr[i],
                    idx: i+1,
                })
                break
            }
        }

        if (stack.length === 0) {
            stack.push({
                h: arr[i],
                idx: i+1,
            })
            answer.push(0)
        }
    }

    return answer.join(' ');


}

console.log(solution(n, strings));

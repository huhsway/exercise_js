let [n, input, m, target] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');

function solution(n, input, m, target) {

    const mySet = new Set();

    for (let i = 0; i < n; i++){
        mySet.add(input[i]);
    }

    for (let i = 0; i < m; i++) {
        if (mySet.has(target[i])){
            console.log('yes');
        }
        else {
            console.log('no');
        }
    }
}

solution(n,input,m,target)
// https://velog.io/@subinmun1997/%EC%9D%B4%EC%BD%94%ED%85%8C-%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89-%EB%B6%80%ED%92%88-%EC%B0%BE%EA%B8%B0 

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

let n = 3;
let m = 2;
let arr = [3,6,9];

function getPermutation(n, m, arr) {
    let visited = Array(n).fill(0);
    let temp = Array(m).fill(0);
    let answer = [];

    function DFS(depth) {
        if (depth === m) {
            answer.push(temp.slice());
        } else {
            for (let i = 0; i < n; i++) {
                if (!visited[i]) {
                    visited[i] = 1;
                    temp[depth] = arr[i];
                    DFS(depth+1);
                    visited[i] = 0;
                }
            }
        }
    }

    DFS(0);
    return answer;
}

console.log(getPermutation(n,m,arr))

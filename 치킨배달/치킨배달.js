const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const city = input.map((line) => line.split(' ').map(Number));


function solution(n, m, city) {

  const house = [];
  const chicken = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (city[i][j] === 1) house.push([i, j]);
      else if (city[i][j] === 2) chicken.push([i, j]);
    }
  }

  const candidates = combinations(chicken.length, m, chicken)
  let answer = Infinity;
  for (let i = 0; i < candidates.length; i++) {
    answer = Math.min(answer, getMinDistance(house, candidates[i]))
  }
  
  return answer;

}

const getMinDistance = (house, candidate) => {
  let sum = 0;
  house.forEach(([hx, hy]) => {
    let min = Infinity;
    candidate.forEach((_, index) => {
      const [cx, cy] = candidate[index];
      min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
    });
    sum += min;
  });
  return sum;
};

function combinations(n, m, arr){
  let temp = Array.from({length: m}, ()=>0);
  let answer = [];
 
  function DFS(depth, start){
    if (depth === m){
      answer.push(temp.slice());
    }else{
      for (let i=start; i<n; i++){
        temp[depth] = arr[i];
        DFS(depth+1, i+1);
        }
    }
  } 
  DFS(0, 0)
  return answer;
}

console.log(solution(n,m,city));
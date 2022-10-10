// const getPermutations = (arr, num) => {
//     const results = [];

//     // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
//         // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
//         const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        
//         // 나머지 배열을 기준으로 다시 순열을 구한다.
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const permutations = getPermutations(rest, num - 1);

//         // 기준값(fixed)에 순열(permutations)을 붙인다.
//         const attached = permutations.map(v => [fixed, ...v]);

//         // 붙인 값을 결과 값에 넣어준다.
//         results.push(...attached);
//     });

//     return results;
// }

// const arr = [1,2,3,4,5];
// const num = 3;
// console.log(getPermutations(arr,num));


let n = 3;
let m = 2;
let arr = [3, 6, 9];
 
function getPermutation(n, m, arr){
  let temp = Array.from({length: m}, ()=>0);
  let visited = Array.from({length: n}, ()=>0);
  let answer = [];
 
  function DFS(depth){
    if (depth === m){
      answer.push(temp.slice());
    }else{
      for (let i=0; i<n; i++){
        if (!visited[i]){
          visited[i] = 1  // 방문처리
          temp[depth] = arr[i];
          DFS(depth+1);
          visited[i] = 0  // 방문 후 다시 올라갈 때 원상복구
        }
      }
    }
  } 
 
  DFS(0)
  return answer;
}

console.log(getPermutation(n, m, arr));

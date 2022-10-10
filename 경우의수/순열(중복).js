// const getPermutations = (arr, num) => {
//     const results = [];
//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
        
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const permutations = getPermutations(origin, num - 1);

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
 
function getRepeatPermutation(n, m, arr){
  let temp = Array.from({length: m}, ()=>0);
  let answer = [];
 
  function DFS(depth){
    if (depth === m){
      answer.push(temp.slice());
    }else{
      for (let i=0; i<n; i++){
        temp[depth] = arr[i];
        DFS(depth+1);
      }
    }
  } 
 
  DFS(0)
  return answer;
}

console.log(getRepeatPermutation(n, m, arr));

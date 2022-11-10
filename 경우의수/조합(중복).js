// const getCombinations = (arr, num) => {
//     const results = [];

//     // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
//     if (num === 1) return arr.map(v => [v]);

//     arr.forEach((fixed, index, origin) => {
//         // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
//         const rest = origin.slice(index + 1);
        
//         // 나머지 배열을 기준으로 다시 조합을 실시한다.
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const combinations = getCombinations(rest, num - 1);

//         // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
//         const attached = combinations.map(v => [fixed, ...v]);

//         // 붙인 값을 결과 값에 넣어준다.
//         results.push(...attached);
//     });

//     return results;
// }

// const arr = [1,2,3,4,5];
// const num = 3;
// console.log(getCombinations(arr,num));

// 조합에서 start를 +1 안한거

let n = 3;
let m = 2;
let arr = [3, 6, 9];
 
function getRepeatCombination(n, m, arr){
  let temp = Array(m).fill(0);
  let answer = [];
 
  function DFS(depth, start){
    if (depth === m){
      answer.push(temp.slice());
    }else{
      for (let i=start; i<n; i++){
        temp[depth] = arr[i];
        DFS(depth+1, i);
        }
    }
  } 
  DFS(0, 0)
  return answer;
}

console.log(getRepeatCombination(n, m, arr));

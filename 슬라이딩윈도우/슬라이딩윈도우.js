// 배열에서 연속하는 3개의 숫자 합이 가장 큰 경우를 출력

function solution(n, k, arr) {
    let result = 0; // 길이 k의 부분 수열의 요소 전체 합의 최댓값
    let sum = 0; // 특정 부분 수열의 전체 합
  
    for(let i = 0; i < k; i++) {
      sum += arr[i];
    }
  
    result = sum;
  
    for(let i = k; i < arr.length; i++) {
      sum += (arr[i] - arr[i - k]); // DP처럼 (1).arr[3] - arr[3-3], (2).arr[4] - arr[1], (3).arr[5], arr[2]
      result = Math.max(result, sum);
    }
  
    return result;
  }
  
  const n = 10;
  const k = 3;
  const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  
  console.log(solution(n, k, arr));
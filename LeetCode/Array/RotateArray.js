// 네이버 면접 복기 토대로 만든거
function rotateArray(arr, t) {
    const n = arr.length - 1;
    for (let i = 0; i < t; i++) {
      const last = arr[n];
  
      for (let j = n; j > 0; j--) {
        arr[j] = arr[j - 1];
      }
  
      arr[0] = last;
    }
    return arr;
  }
  
  // // 배열 하나 더쓰고 for문 1번으로
  // function rotateArrayAlt(arr, t) {
  //   const n = arr.length;
  //   t = t % n; // 배열 길이보다 큰 t에 대응하기 위해 t를 배열 길이로 나눈 나머지를 사용합니다.
  //
  //   const rotatedArr = new Array(n);
  //   for (let i = 0; i < n; i++) {
  //     rotatedArr[(i + t) % n] = arr[i];
  //   }
  //
  //   return rotatedArr;
  // }
  
  function main() {
    const arr = [1, 2, 3, 4, 5, 6];
    const t = 3;
    const result = rotateArray(arr, t);
    console.log(result);
  }
  
  main();
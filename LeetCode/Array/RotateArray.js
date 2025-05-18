// 네이버 면접 복기 토대로 만든거
function rotateArray(arr, t) {
    const n = arr.length; // 배열의 실제 길이
    const rotations = t % n; // 실제 회전 횟수 계산

    for (let i = 0; i < rotations; i++) {
        const last = arr[n - 1]; // 마지막 요소

        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1]; // 요소를 오른쪽으로 한 칸씩 이동
        }

        arr[0] = last; // 마지막 요소를 첫 번째 위치로 이동
    }
    return arr;
}

  
  // // 배열 하나 더쓰고 for문 1번으로
  // function rotateArrayAlt(arr, t) {
  //   const n = arr.length;
  //   const rotations = t % n; // 배열 길이보다 큰 t에 대응하기 위해 t를 배열 길이로 나눈 나머지를 사용합니다.
  //
  //   const rotatedArr = new Array(n);
  //   for (let i = 0; i < n; i++) {
  //     rotatedArr[(i + rotations) % n] = arr[i];
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
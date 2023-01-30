// https://ssafy-story.tistory.com/21

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

const quickSort = function (array, start, end) {
  // 원소가 1개일 경우
  if (start >= end) return;

  let pivot = start; // 맨 앞의 값을 pivot으로 설정
  let left = start + 1;
  let right = end;

  while (left <= right) { // left가 right보다 작으면 종료
    // left가 end보다 크거나 array[left]값이 array[pivot]보다 크면 종료
    while (left <= end && array[left] <= array[pivot]) left++;
    // right가 start보다 작거나 같고 array[right]가 array[pivot]보다 작으면 종료
    while (right > start && array[right] >= array[pivot]) right--;
    // 교차 됐으면 right와 pivot idx에 있는 값 교환
    if (left > right) {
      let swap = array[pivot];
      array[pivot] = array[right];
      array[right] = swap;
    }
    // 교차 되지 않았으면 right와 left index값의 자리 바꿔줌
    else {
      let swap = array[left];
      array[left] = array[right];
      array[right] = swap;
    }
  }

  quickSort(array, 0, right - 1);
  quickSort(array, right + 1, end);

  return array;
};

const sorted = quickSort(array, 0, array.length - 1);
console.log(sorted);

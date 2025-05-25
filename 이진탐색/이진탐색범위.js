function lowerBound(array, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function upperBound(array, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function countByRange(data, left, right) {
  return upperBound(data, right, 0, data.length) - lowerBound(data, left, 0, data.length);
}

let data = [1, 2, 2, 2, 3, 4];
console.log(countByRange(data, 2, 2)); // 출력: 3
function binarySearch(array, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end; // lowerBound와  upperBound를 구하기 위해서 end 리턴
}

function countByRange(data, left, right) {
  return (
    binarySearch(data, right, 0, data.length - 1) -
    binarySearch(data, left, 0, data.length - 1)
  );
}

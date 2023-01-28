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

  return -1;
}

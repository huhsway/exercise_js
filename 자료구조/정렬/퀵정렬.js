// https://ssafy-story.tistory.com/21

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

const quickSort = function (array, start, end) {

    if (start >= end) return;

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {

        while (left <= end && array[left] <= array[pivot]) left++;
        while (right > start && array[right] >= array[pivot]) right--;

        if (left > right) {
            let swap = array[pivot];
            array[pivot] = array[right];
            array[right] = swap
        } else {
            let swap = array[left];
            array[left] = array[right];
            array[right] = swap;
        }
    }

    quickSort(array, 0, right - 1);
    quickSort(array, right + 1, end);

    return array;
}

const sorted = quickSort(array, 0, array.length - 1)
console.log(sorted);
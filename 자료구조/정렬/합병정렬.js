// https://velog.io/@proshy/JSmerge-sort%ED%95%A9%EB%B3%91-%EC%A0%95%EB%A0%AC

function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const boundary = Math.floor(arr.length / 2);
    const left = arr.slice(0, boundary);
    const right = arr.slice(boundary);
    return merge(mergeSort(left), mergeSort(right));
}

const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(arr);
console.log(sortedArray);

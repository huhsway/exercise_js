const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let cur = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > cur){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    return arr;
}

insertionSort([10, 34, 45, 50, 8, 48, 14, 41, 43, 1, 46, 9, 7, 25, 36])
// [1, 7, 8, 9, 10, 14, 25, 34, 36, 41, 43, 45, 46, 48, 50]

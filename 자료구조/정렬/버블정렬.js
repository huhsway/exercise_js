const bubbleSort = (arr) => {
    for(let i = arr.length ; i > 0 ; i--){
        for(let j = 0 ; j < i - 1 ; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);

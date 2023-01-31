const selectionSort = (arr) => {
    for(let i = 0 ; i < arr.length; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

selectionSort([2, 4, 33, 17, 8, 45, 1, 7, 10, 37]);
// [1, 2, 4, 7, 8, 10, 17, 33, 37, 45]

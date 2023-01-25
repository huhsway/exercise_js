/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


/*
    7(0,0) 8(0,1) 9(0,2)
    4(1,0) 5(1,1) 6(1,2)
    1(2,0) 2(2,1) 3(2,2)

    i = 0 => j = 0,1,2
    i = 1 => j = 1,2
    i = 2 => j = 2
*/

var rotate = function(matrix) {

    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    console.log(matrix)

};
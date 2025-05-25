/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// https://leetcode.com/problems/set-matrix-zeroes

var setZeroes = function(matrix) {

    let points = []

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) points.push([i,j])
        }
    }

    points.forEach((arr) => {
        const [i,j] = arr;
        let up = 0;
        let down = i+1;
        let left = 0;
        let right = j+1;
        while(up < i) {
            matrix[up][j] = 0;
            up++;
        }
        while(down < matrix.length) {
            matrix[down][j] = 0;
            down++;
        }
        while(left < j) {
            matrix[i][left] = 0;
            left++;
        }
        while(right < matrix[i].length) {
            matrix[i][right] = 0;
            right++;
        }                    
    })
    
};
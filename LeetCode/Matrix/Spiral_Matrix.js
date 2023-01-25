/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let n = matrix.length, m = matrix[0].length;
    
    let startRow = 0, endRow = n-1; startColumn = 0, endColumn = m-1;

    let count = 0;

    const result = [];

    while(true) {

        for (let i = startColumn; i <= endColumn; i++) {
            result.push(matrix[startRow][i]);
            count++;
            if (count === n*m) return result;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endColumn]);
            count++;
            if (count === n*m) return result;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            result.push(matrix[endRow][i]);
            count++;
            if (count === n*m) return result;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result.push(matrix[i][startColumn]);
            count++;
            if (count === n*m) return result;
        }
        startColumn++;

    }

};
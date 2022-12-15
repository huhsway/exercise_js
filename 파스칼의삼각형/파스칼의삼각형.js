function pascalsTriangle(n) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
      let row = [];
      
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
      }
      result.push(row);
    }
    return result.join(',');
}
  
console.log(pascalsTriangle(10))
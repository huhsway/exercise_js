function solution (n, weak, dist) {
    const len = weak.length;
    const linear_weak = new Array(len*2 - 1).fill(0);
    
    for(let i = 0; i < len*2-1; i++)
      linear_weak[i] = i < len ? weak[i] : weak[i-len] + n;
    
    dist.sort((a, b) => b-a);
    
    for(let i = 1; i <= dist.length; i++) {
      const permutation = getPermutation(dist.length, i, dist);
      
      for(const permu of permutation) {
        for(let j = 0; j < len; j++) {
          let line = linear_weak.slice(j, len+j);
          for(const p of permu) {
            const coverage = line[0] + p;
            line = line.filter(e => e > coverage);
            if(!line.length) return i;
          }
        }
      }
    }
    
    return -1;
  }

  function getPermutation(n, m, arr) {
    let visited = Array(n).fill(0);
    let temp = Array(m).fill(0);
    let answer = [];
   
    function DFS(depth){
      if (depth === m){
        answer.push(temp.slice());
      }else{
        for (let i=0; i<n; i++){
          if (!visited[i]){
            visited[i] = 1  // 방문처리
            temp[depth] = arr[i];
            DFS(depth+1);
            visited[i] = 0  // 방문 후 다시 올라갈 때 원상복구
          }
        }
      }
    } 
   
    DFS(0)
    return answer;
  }


//   const getPermutation = (arr, n) => {
//     if(n === 1) return arr.map(el => [el]);
//     const result = [];
    
//     arr.forEach((fixed, idx, origin) => {
//       const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
//       const perms = getPermutation(rest, n-1);
//       const attached = perms.map(perm => [fixed, ...perm]);
//       result.push(...attached);
//     });
    
//     return result;
//   }
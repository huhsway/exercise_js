// https://school.programmers.co.kr/learn/courses/30/lessons/42579 

function solution(genres, plays) {
    const answer = [];

    // const hash = {}
    // for (let i = 0; i < genres.length; i++) {
    //     if (hash[genres[i]]) {
    //         hash[genres[i]].sum += plays[i];
    //         hash[genres[i]].list[i] = plays[i]
    //     } else {
    //         hash[genres[i]] = {
    //             sum: plays[i],
    //             list: {[i]: plays[i]}
    //         }
    //     }
    // }

    // 위의 내용을 reduce를 이용해서 간결하게 쓴거
    const hash = genres.reduce((acc, cur, idx) => {
      if(acc[cur]) {	
        acc[cur].sum += plays[idx];
        acc[cur].list[idx] = plays[idx];
      } else	
        acc[cur] = {
          sum : plays[idx],
          list : {
            [idx] : plays[idx]
          }
        }
    
      return acc;
    }, {});
    
    // sum 값이 큰 순으로 정렬
    const sorted = Object.values(hash)
          .sort((a,b) => b.sum - a.sum) // 참고 중괄호{}를 하면 return을 써야하고 ex. return b.sum - a.sum 중괄호{} 없으면 return 빼고 씀
        .map(el => el.list);
    
    // list내에서 많이 play 된 순으로 정렬
    const indexArr = sorted.map(list => 
        Object.keys(list).sort((a, b) => list[b] - list[a]));
    
    indexArr.forEach(genre => {
    if(genre[0]) answer.push(+genre[0]); // 문자로 된 숫자에 +를 붙이면 숫자형으로 변함
    if(genre[1]) answer.push(+genre[1]);
    });
    
    return answer;
}
  
console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

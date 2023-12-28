// https://velog.io/@xxwb__/%EC%9D%B4%EA%B2%83%EC%9D%B4-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%8B%A4-%EC%A0%95%EB%A0%AC-%EA%B5%AD%EC%98%81%EC%88%98 

let [n, ...arr] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const names = [];
// result = arr
//         .map(v => v.split(" ").map(vv => Number(vv)||vv)) //Number(vv)||vv는 문자는 문자로 냅두고 문자형 숫자는 숫자로 바꾸는 거
//         .sort((a, b) => {
//             if (a[1] < b[1]) return 1
//             else if (a[1] > b[1]) return -1
//             else {
//                 if (a[2] > b[2]) return 1
//                 else if (a[2] < b[2]) return -1
//                 else {
//                     if (a[3] < b[3]) return 1
//                     else if (a[3] > b[3]) return -1
//                     else {
//                         if (a[0] > b[0]) return 1
//                         else if (a[0] < b[0]) return -1
//                         else return 0
//                     }
//                 }
//             }
//         });

result = arr
    .map(v => v.split(" ").map(vv => Number(vv) || vv))
    .sort((a, b) => 
        b[1] - a[1] || 
        a[2] - b[2] || 
        b[3] - a[3] || 
        a[0].toString().localeCompare(b[0].toString())
    );

result.forEach(v => names.push(v[0]));
console.log(names.join("\n"));

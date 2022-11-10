let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const names = [];
result = arr
        .map(v => v.split(" ").map(vv => Number(vv)||vv)) //Number(vv)||vv는 문자는 문자로 냅두고 문자형 숫자는 숫자로 바꾸는 거
        .sort((a, b) => {
            if (a[1] < b[1]) return 1
            else if (a[1] > b[1]) return -1
            else {
                if (a[2] > b[2]) return 1
                else if (a[2] < b[2]) return -1
                else {
                    if (a[3] < b[3]) return 1
                    else if (a[3] > b[3]) return -1
                    else {
                        if (a[0] > b[0]) return 1
                        else if (a[0] < b[0]) return -1
                        else return 0
                    }
                }
            }
        });
result.forEach(v => names.push(v[0]));
console.log(names.join("\n"));
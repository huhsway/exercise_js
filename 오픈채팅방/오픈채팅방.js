// https://school.programmers.co.kr/learn/courses/30/lessons/42888 

// 잦은 데이터 갱신과 적은 데이터 출력에는 Object > Map
// 적은 데이터 갱신과 많은 데이터 출력에는 Object<<<<<<<<<< Map

// Map 사용
function solution(record) {
    let answer = [];
    const map = new Map();
    
    for (let i = 0; i < record.length; ++i) {
        const [state, uid, name] = record[i].split(' ');
        
        if (state == 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
            
            continue;
        }
        
        if (state == 'Enter') {
            answer.push([uid, '님이 들어왔습니다.']);
        }

        map.set(uid, name);
    }
    
    return answer.map(ele => map.get(ele[0]) + ele[1]);
}

// // Object 사용
// function solution(record) {
//     let answer = [];
//     const map = {};
    
//     for (let i = 0; i < record.length; ++i) {
//         const [state, uid, name] = record[i].split(' ');
        
//         if (state == 'Leave') {
//             answer.push([uid, '님이 나갔습니다.']);
            
//             continue;
//         }
        
//         if (state == 'Enter') {
//             answer.push([uid, '님이 들어왔습니다.']);
//         }

//         map[uid] = name;
//     }
    
//     return answer.map(ele => map[ele[0]] + ele[1]);
// }

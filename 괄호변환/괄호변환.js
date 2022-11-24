// https://school.programmers.co.kr/learn/courses/30/lessons/60058

// '균형잡힌 괄호 문자열'의 인덱스 반환
function balancedIndex(p) {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') count++;
        else count--;
        if (count === 0) return i;
    }
}

function checkProper(p) {
    let count = 0; // 왼쪽 괄호의 개수
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') count++;
        else {
            if (count === 0) return false;
            count--;
        }
    }
    return true;
}

function solution(p) {
    let answer = '';
    if (p === '') return '';
    let index = balancedIndex(p);
    let u = p.slice(0, index + 1);
    let v = p.slice(index + 1);
    if (checkProper(u)) answer = u + solution(v)
    else {
        answer = '(';
        answer += solution(v);
        answer += ')';
        u = [...u.slice(1,-1)]
        for (let i = 0; i < u.length; i++) {
            if (u[i] === '(') u[i] = ')';
            else u[i] = '(';
        }
        answer += u.join('');
    }
    return answer;
}

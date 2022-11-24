// https://school.programmers.co.kr/learn/courses/30/lessons/17676

/* timeString to timeNumber (ex. 00:01:00.002 => 60.002) */
function toTimeNumber (timeStr) {
    const hours = Number(timeStr.substr(0, 2)) *60 *60 *1000;
    const minutes = Number(timeStr.substr(3, 2)) *60 *1000;
    const seconds = Number(timeStr.substr(6, 2)) *1000;
    const milliseconds = Number(timeStr.split('.')[1]);
    return hours + minutes + seconds + milliseconds;
}

function solution(lines) {

    /* 시작시간,종료시간 */
    const logs = lines.map( e => e.slice(11).split(' ') ).map( e => [ toTimeNumber(e[0]), Number(e[1].replace('s','')) ] );
    const times = logs.map( e => [ e[0] -(e[1]*1000) +1, e[0] ] ) // times[i] includes [ 시작시간, 종료시간 ]
                    .sort((a, b) => a[0] - b[0]); // 시작시간 기준 오름차순 정렬

    /* 시작시간 기준 순회 비교 */
    let max = 1;
    let window = [];
    times.forEach(([start,end]) => {
        window.push(end);
        window = window.filter(e => e > start - 1000);
        if (window.length > max) max = window.length;
    })

    return max;
}

const lines = ["2016-09-15 20:59:57.421 0.351s", "2016-09-15 20:59:58.233 1.181s", "2016-09-15 20:59:58.299 0.8s", "2016-09-15 20:59:58.688 1.041s", "2016-09-15 20:59:59.591 1.412s", "2016-09-15 21:00:00.464 1.466s", "2016-09-15 21:00:00.741 1.581s", "2016-09-15 21:00:00.748 2.31s", "2016-09-15 21:00:00.966 0.381s", "2016-09-15 21:00:02.066 2.62s"]
console.log(solution(lines));

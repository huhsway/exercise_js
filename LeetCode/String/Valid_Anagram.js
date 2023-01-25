/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    const sMap = s.split('').sort().reduce((acc,cur) => {
        if (acc[cur]) acc[cur] += 1;
        else acc[cur] = 1;
        return acc
    },{})

    const tMap = t.split('').sort().reduce((acc,cur) => {
        if (acc[cur]) acc[cur] += 1;
        else acc[cur] = 1;
        return acc
    },{})

    return Object.entries(sMap).toString() === Object.entries(tMap).toString(); // 객체의 값을 비교할 때
};
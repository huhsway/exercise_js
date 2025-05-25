var minWindow = function(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    let minValue = Infinity; // 여기서 Number.MAX_SAFE_INTEGER를 Infinity로 변경
    let count = tLen;
    let start = 0;
    let left = 0;
    let right = 0;

    const tList = t.split('').reduce((acc, cur) => {
        if(acc[cur]) acc[cur] += 1;
        else acc[cur] = 1;
        return acc;
    },{});

    while (right < sLen) {
        if (tList[s[right]] !== undefined) {
            if (tList[s[right]] > 0) count--;
            tList[s[right]]--;
        }
        right++;

        while (count === 0) {
            if (right - left < minValue) {
                minValue = right - left;
                start = left;
            }

            if (tList[s[left]] !== undefined) {
                if (tList[s[left]] === 0) count++;
                tList[s[left]]++;
            }
            left++;
        }
    }

    // 결과 반환 부분은 동일
    return minValue === Infinity ? '' : s.substring(start, start + minValue);
};

const s = "ADOBECODEBANC";
const t = "ABC";

console.log(minWindow(s, t)); // 출력: "BANC"
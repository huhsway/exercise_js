/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// https://leetcode.com/problems/minimum-window-substring/ 

var minWindow = function(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    let minValue = Number.MAX_SAFE_INTEGER;
    let count = tLen;
    let start = 0;
    let left = 0;
    let right = 0;
  
    const map = t.split('').reduce((acc, cur) => {
        if(acc[cur]) acc[cur] += 1;
        else acc[cur] = 1;
        return acc;
    },{})
  
    while (right < sLen) {
      if (map[s[right]] !== undefined) {
        if (map[s[right]] > 0) count--;
        map[s[right]]--;
      }
      right++;
  
      while (count === 0) {
        if (right - left < minValue) {
          minValue = right - left;
          start = left;
        }
  
        if (map[s[left]] !== undefined) {
          if (map[s[left]] === 0) count++;
          map[s[left]]++;
        }
        left++;
      }
    }
  
    return minValue === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minValue);
  };
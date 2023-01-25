/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    
    let check = '';
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        if (check.includes(s[i])) {
            check = check.slice(check.indexOf(s[i]) + 1);
        }
      
        check += s[i];
        result.push(check.length);
    }
    
    return Math.max(...result);
};
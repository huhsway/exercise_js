/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;

    let check = '';
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (check.includes(s[i])) {
            check = check.substring(check.indexOf(s[i]) + 1);
        }

        check += s[i];
        result.push(check.length);
    }

    return Math.max(...result);
};

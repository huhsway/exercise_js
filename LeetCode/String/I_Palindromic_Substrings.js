/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/palindromic-substrings/description/

var countSubstrings = (s) => {
    let count = 0;

    const getPalCount = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        getPalCount(i, i);    // odd length strings
        getPalCount(i, i+1);  // even length strings
    }

    return count
};

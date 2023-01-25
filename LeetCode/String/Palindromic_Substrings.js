/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        count += getPalCount(s, i, i);    // odd length strings
        count += getPalCount(s, i, i+1);  // even length strings
    }

    return count
};

const getPalCount = (s, l, r) => {
    count = 0;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
    return count;
}
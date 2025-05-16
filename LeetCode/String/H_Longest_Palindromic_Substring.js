/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    const n = s.length;
    if (n < 2) return s;

    let start = 0, maxLength = 1;

    const isPalindrome = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - left - 1];  // 시작 위치와 길이 반환
    };

    for (let i = 0; i < n; i++) {
        // 홀수 길이 팰린드롬 (i가 중심)
        let [oddStart, oddLength] = isPalindrome(i, i);
        if (oddLength > maxLength) {
            start = oddStart;
            maxLength = oddLength;
        }

        // 짝수 길이 팰린드롬 (i와 i+1이 중심)
        let [evenStart, evenLength] = isPalindrome(i, i + 1);
        if (evenLength > maxLength) {
            start = evenStart;
            maxLength = evenLength;
        }
    }

    return s.substring(start, start + maxLength);
};


// 테스트 코드 (선택 사항)
console.log(longestPalindrome("babad"));   // "bab" 또는 "aba"
console.log(longestPalindrome("cbbd"));    // "bb"
console.log(longestPalindrome("a"));       // "a"
console.log(longestPalindrome("ac"));      // "a"
console.log(longestPalindrome("racecar")); // "racecar"
console.log(longestPalindrome("abba"));    // "abba"

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = [true];
    for (let i = 0; i < s.length; i++) {
        dp.push(false);
    }

    for (let i = 0; i < s.length + 1; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            const word_len = word.length;
            if (dp[i - word_len] && s.slice(i - word_len, i) === word) {
                dp[i] = true;
            }
        }
    }

    return dp[dp.length - 1];
};
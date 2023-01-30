/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    const dp = Array(s.length+1).fill(false);

    dp[0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            const wordLength = word.length;
            if (i - wordLength >= 0) {
                if (dp[i-wordLength] && s.slice(i-wordLength, i) === word){
                    dp[i] = true;
                    continue
                }
            }
        }
    }

    return dp[s.length]
};

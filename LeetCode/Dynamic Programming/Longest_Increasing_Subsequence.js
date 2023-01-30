/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);
    let ans = 1;

    for (let i = 1; i < nums.length; i++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) max = Math.max(max, dp[j]);
        }
        dp[i] = max + 1;
        ans = Math.max(ans, dp[i]);
    }

    return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    const dp = Array(nums.length + 1).fill(1);
    let maxValue = 1;

    for (let i = 1; i <= nums.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                maxValue = Math.max(maxValue, dp[i])
            }
        }
    }

    return maxValue
};

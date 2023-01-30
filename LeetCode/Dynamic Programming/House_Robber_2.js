/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0];

    const dp1 = [];

    dp1[0] = nums[0];
    dp1[1] = Math.max(dp1[0], nums[1]);

    for (let i = 2; i <= nums.length - 2; i++) {
        dp1[i] = Math.max(dp1[i-2] + nums[i], dp1[i-1]);
    }

    const dp2 = [];

    dp2[1] = nums[1];
    dp2[2] = Math.max(dp2[1], nums[2]);

    for (let i = 3; i <= nums.length - 1; i++) {
        dp2[i] = Math.max(dp2[i-2] + nums[i], dp2[i-1])
    }

    return Math.max(dp1[nums.length - 2], dp2[nums.length - 1])
};

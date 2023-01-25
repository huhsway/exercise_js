/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let temp = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        temp = Math.max(temp+nums[i], nums[i]);
        result = Math.max(temp, result);
    }

    return result

};
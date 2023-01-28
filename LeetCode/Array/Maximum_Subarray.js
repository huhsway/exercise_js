/**
 * @param {number[]} nums
 * @return {number}
 */

// Best_Time_to_Buy_and_Sell_Stock과 비슷 i = 1 부터 더한 값이 현재보다 크면 갱신
var maxSubArray = function(nums) {

    let temp = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        temp = Math.max(temp+nums[i], nums[i]);
        result = Math.max(temp, result);
    }

    return result

};
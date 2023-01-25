/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let result = nums[0];
    let maxValue = 1;
    let minValue = 1;
    let maxValueTemp = maxValue;

    for (const num of nums) {
        maxValueTemp = maxValue;
        maxValue = Math.max(maxValue * num, minValue * num, num);
        minValue = Math.min(maxValueTemp * num, minValue * num, num);
        result = Math.max(maxValue, result);
    }

    return result

    
};
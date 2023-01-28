/**
 * @param {number[]} nums
 * @return {number}
 */

// 현재, maxValue곱한 값, minValue곱한 값 이렇게 따져야 함 왜냐하면 - * -가 +니까
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
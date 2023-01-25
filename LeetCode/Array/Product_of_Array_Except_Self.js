/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const length = nums.length;
    const arr = Array(length);

    arr[0] = 1;
    for (let i = 1; i < length; i++) {
        arr[i] = arr[i-1] * nums[i-1];
    }

    let acc = 1;
    for (let i = length - 2; i >= 0; ie--) {
        acc *= nums[i+1];
        arr[i] *= acc;
    }

    return arr;

};
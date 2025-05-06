/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/product-of-array-except-self/

// 왼쪽에서 곱해 나간 다음에 끝에서 부터 다시 밑으로 원래 배열의 누적을 곱해주자.
var productExceptSelf = function(nums) {

    const arr = new Array(nums.length);

    arr[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i-1] * nums[i-1];
    }
    
    let acc = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        acc *= nums[i+1];
        arr[i] *= acc;
    }

    return arr;

};

console.log(productExceptSelf([1, 2, 3, 4]));

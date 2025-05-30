/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[left] <= nums[right]) {
            return nums[left];
        }
        if (nums[left] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
};

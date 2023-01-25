/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[start] <= nums[end]) {
            return nums[start];
        }
        if (nums[mid] >= nums[start]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return -1;
};
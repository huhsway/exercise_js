/**
 * @param {number[]} nums
 * @return {number}
 */

// 범위를 줄이는게 중요함 솔직히 이해는 잘 안감 이렇게 범위를 줄일 수 있다는걸 알고있자
var findMin = function (nums) {
    
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[start] <= nums[end]) return nums[start]
        if (nums[mid] >= nums[start]) start = mid + 1;
        else end = mid;
    }

}

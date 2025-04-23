/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 배열을 순회하면서 하나의 값을 잡고 나머지는 시간을 줄이기 위해 이진탐색으로 접근
var threeSum = function(nums) {
  const answer = [];
  const N = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 중복 기준값 건너뜀

    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;   // 중복 제거
        while (left < right && nums[right] === nums[right - 1]) right--; // 중복 제거

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return answer;
};
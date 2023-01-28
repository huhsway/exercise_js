/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 배열을 순회하면서 하나의 값을 잡고 나머지는 시간을 줄이기 위해 이진탐색으로 접근
var threeSum = function (nums) {
  const answer = [];
  const N = nums.length;

  nums.sort((a, b) => a - b);

  for (let standard = 0; standard < N - 2; standard++) {
    let left = standard + 1;
    let right = N - 1;

    if (nums[standard] === nums[standard - 1]) continue;

    while (left < right) {
      const total = nums[standard] + nums[left] + nums[right];
      if (total === 0) {
        answer.push([nums[standard], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (total > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return answer;
};

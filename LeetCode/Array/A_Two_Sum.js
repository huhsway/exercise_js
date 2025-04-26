/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/two-sum/

// vals 객체를 만들어 target에서 nums[i]를 뺀 값이 vals에 들어있는걸 확인하는게 핵심
var twoSum = function (nums, target) {
    let vals = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in vals) {
        return [vals[target-nums[i]], i];
      } else {
        vals[nums[i]] = i;
      }
    }
  };
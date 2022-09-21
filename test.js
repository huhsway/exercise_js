/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function twoSum(nums, target) {
    let vals = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in vals) {
        return [vals[target-nums[i]], i];
      } else {
        vals[nums[i]] = i;
      }
    }
  };


  nums = [3,2,4];
  target = 6;
  console.log(twoSum(nums, target));
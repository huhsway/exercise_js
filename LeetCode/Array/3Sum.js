/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    const answer = [];
const N = nums.length;

nums.sort((a, b) => a-b);

  
for (let standard=0; standard < N-2; standard++) {
  let left = standard+1;
  let right = N-1;
  
   if(nums[standard] === nums[standard-1]) continue;

    
  while (left < right) {
    const total = nums[standard] + nums[left] + nums[right]
    if (total === 0) {

      answer.push([nums[standard], nums[left], nums[right]]);
      while (left < right && nums[left] === nums[left+1]) left++;
      while (left < right && nums[right] === nums[right-1]) right--;

      left++;
      right--;

    } else if (total > 0) {
      right--;
    } else {
      left++;
    }
  }
}
return answer
  
};
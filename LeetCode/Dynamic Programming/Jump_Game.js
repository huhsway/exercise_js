/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxJump) return false;
        else {
            maxJump = Math.max(maxJump, i + nums[i]);
        }
    }

    return true;

};

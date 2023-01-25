/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = containsDuplicate = (nums)=>nums.length!==new Set(nums).size

var containsDuplicate = function(nums) {

    const arr = nums.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] = acc[cur] + 1;
        } else {
            acc[cur] = 1;
        }
        return acc
    }, {});

    return Object.values(arr).some((it) => it !== 1);

}


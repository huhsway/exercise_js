/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  https://leetcode.com/problems/contains-duplicate/

// reduce를 이용해서 갯수를 센 다음에 값이 없으면 true, false를 반환하는 some을 사용하자
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


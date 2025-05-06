/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/container-with-most-water/

// 기준값을 놓고 범위를 줄여서 최댓값을 찾자
var maxArea = function(height) {
    let maxValue = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const standard = height[right] > height[left] ? height[left] : height[right];
        const gap = (right - left) * standard;
              
        height[right] > height[left] ? left++ : right--;
        maxValue = Math.max(maxValue, gap);
    }
    return maxValue;
};
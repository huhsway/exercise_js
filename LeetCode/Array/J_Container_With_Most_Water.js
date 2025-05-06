/**
 * @param {number[]} height
 * @return {number}
 */

// https://leetcode.com/problems/container-with-most-water/

// 기준값을 놓고 범위를 줄여서 최댓값을 찾자
var maxArea = function(height) {
    let maxValue = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start < end) {
        const standard = height[end] > height[start] ? height[start] : height[end];
        const gap = (end - start) * standard;
              
        height[end] > height[start] ? start++ : end--;
        maxValue = Math.max(maxValue, gap);
    }
    return maxValue;
};
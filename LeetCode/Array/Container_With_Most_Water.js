/**
 * @param {number[]} height
 * @return {number}
 */

// 기준값을 놓고 범위를 줄여서 최댓값을 찾자
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start < end) {
        const standard = height[end] > height[start] ? height[start] : height[end];
        const gap = (end - start) * standard;
              
        height[end] > height[start] ? start++ : end--;
        max = Math.max(max, gap);
    }
    return max;
};
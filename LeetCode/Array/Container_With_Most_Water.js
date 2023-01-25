/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start < end) {
        const standard = height[end] > height[start] ? height[start] : height[end];
        const gap = (end - start) * standard;
              
        height[end] > height[start] ? start++ : end--;
        max = max < gap ? gap : max;
    }
    return max;
};
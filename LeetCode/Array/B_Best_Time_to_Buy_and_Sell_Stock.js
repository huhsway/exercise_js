/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// 내가 산거보다 싼게 있다면 사서 비교하는게 핵심
var maxProfit = function(prices) {
    
    let buy = prices[0], maxValue = 0;
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        }
        else if (prices[i] - buy > maxValue) {
            maxValue = prices[i] - buy;
        }
    }
    return maxValue;
};
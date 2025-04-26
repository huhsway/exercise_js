/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// 내가 산거보다 싼게 있다면 사서 비교하는게 핵심
var maxProfit = function(prices) {
    
    let buy = prices[0], max_profit = 0, length = prices.length;
    for (let i = 1; i < length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        }
        else if (prices[i] - buy > max_profit) {
            max_profit = prices[i] - buy;
        }
    }
    return max_profit;
};
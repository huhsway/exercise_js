/**
 * @param {number[]} prices
 * @return {number}
 */
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
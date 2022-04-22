// Leetcode #121 Best Time To Buy and Sell Stock

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let buy = prices[0];
    let max = 0;
    
    for(let i = 1; i < prices.length; i++){
        const sell = prices[i];
        const profit = sell - buy;
        max = Math.max(max, profit);
        buy = Math.min(buy, sell);
    }
    return max;
};


// test case:


// [7,1,5,3,6,4]
// expects: 5

// [2,4,1]
// expects: 2


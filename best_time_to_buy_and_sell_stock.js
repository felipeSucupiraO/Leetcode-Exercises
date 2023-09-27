/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function maxProfit (prices) {
    var maxProfit = 0;
    var smaller = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[smaller]) {
            smaller = i;
            continue;
        }
        else if (prices[i] - prices[smaller] > maxProfit) {
            maxProfit = prices[i] - prices[smaller];
        }
    }

    return maxProfit;
}

/* 
The time complexity of this algorithm is O(n), since it iterates through all the prices.
*/
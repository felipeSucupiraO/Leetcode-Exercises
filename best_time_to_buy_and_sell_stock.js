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

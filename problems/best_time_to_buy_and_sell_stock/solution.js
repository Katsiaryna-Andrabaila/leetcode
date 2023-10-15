/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxProfit = 0;
    let min = prices[0];

    for (let i = 0; i < prices.length; i += 1) {
       if (min < prices[i]) {
           if (prices[i] - min > maxProfit) maxProfit = prices[i] - min;
       } else {
           min = prices[i];
       }
    }
    return maxProfit;
};
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = (accounts) => {
    let maxWealth = 0;

    for (const account of accounts) {
        const wealth = account.reduce((acc, el) => acc + el, 0);
        if (wealth > maxWealth) {
            maxWealth = wealth;
        }
    }

    return maxWealth;
};
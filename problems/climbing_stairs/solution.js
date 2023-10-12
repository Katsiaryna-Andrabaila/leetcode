/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    if (n <= 2) return n;

    let steps = 2;
    let prev = 0;
    let next = 1;

    for (let i = 3; i <= n; i += 1) {
        const savePrev = prev;
        prev = next;
        next += savePrev;
        steps += next;
    }

    return steps;
};
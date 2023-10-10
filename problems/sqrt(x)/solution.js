/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    if (x === 0) return 0;
    if (x <= 3) return 1;
    
    for (let i = 1; i <= x; i += 1) {
        if (i * i === x) {
            return i;
        }
        if (i * i > x) {
            return i - 1;
        }
    }
};
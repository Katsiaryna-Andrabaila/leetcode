/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
    const original = [...heights];
    heights.sort((a, b) => a - b);
    
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== original[i]) count++;
    }
    
    return count;
};
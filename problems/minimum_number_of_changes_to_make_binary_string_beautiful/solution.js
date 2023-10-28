/**
 * @param {string} s
 * @return {number}
 */
const minChanges = (s) => {
    if (s.length === 2) return s[0] === s[1] ? 0 : 1;
    
    let count = 0;
    
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) count += 1;
    }
    
    return count;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let result = '';
    let count = 1;

    if (strs.length === 1) return strs[0];
    if (strs[0] === '') return '';

    while (count <= strs[0].length) {
        const prefix = strs[0].slice(0, count);
        
        if (strs.every((el) => el.startsWith(prefix))) {
            result = prefix;
            count++;
        } else {
            return result;
        }
    }
    
    return result;
};
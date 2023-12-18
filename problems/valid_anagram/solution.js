/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const sArr = s.split('').sort();  
    const tArr = t.split('').sort();

    return sArr.join('') === tArr.join('');
};
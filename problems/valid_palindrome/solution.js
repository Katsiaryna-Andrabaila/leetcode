/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const arr = s.toLowerCase().split('');
    const filteredArr = arr.filter((el) => /^[a-zA-Z0-9]+$/.test(el));

    const s1 = filteredArr.join('');
    const s2 = filteredArr.reverse().join('');
    
    return s1 === s2;
};
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.split(' ').filter((el) => el);
    return arr[arr.length - 1].length;
};
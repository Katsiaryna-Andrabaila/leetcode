/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, Math.max(...arr.slice(i + 1)));
    }
    arr[arr.length - 1] = -1;
    return arr;
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i).concat(arr.slice(i + 1)).includes(arr[i] / 2)) {
            return true;
        }
    }
    
    return false;
};
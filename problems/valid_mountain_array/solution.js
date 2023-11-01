/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
    if (arr.length < 3) return false;
    
    let pick;
    let point = 0;
    
    while (arr[point + 1] > arr[point]) {
        pick = point + 1;
        point++;
    }
    
    if (arr[pick] === arr[pick + 1] || pick === arr.length - 1) {
        return false;
    } else {
        let point2 = pick;
        let result = false;
        while (point2 < arr.length - 1) {
            if (arr[point2] > arr[point2 + 1]) {
                result = true;
                point2++;
            } else {
                return false;
            }
        }
        
        return result;
    }
};
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let aReversed = a.split('').reverse();
    let bReversed = b.split('').reverse();
    let biggerArr = a.length >= b.length ? aReversed : bReversed;
    let smallerArr = a.length >= b.length ? bReversed : aReversed;

    for (let i = 0; i < biggerArr.length; i += 1) {
        if (+aReversed[i] + +bReversed[i] === 3) {
            biggerArr[i + 1] = (+biggerArr[i + 1] | 0) + 1;
            biggerArr[i] = 1;
        } else if (+aReversed[i] + +bReversed[i] === 2 || +biggerArr[i] === 2) {
            biggerArr[i + 1] = (+biggerArr[i + 1] | 0) + 1;
            biggerArr[i] = 0;
        } else if (!smallerArr[i]) {
            biggerArr[i] = biggerArr[i];
        } else {
            biggerArr[i] = +aReversed[i] + +bReversed[i];
        } 
    }
    return biggerArr.reverse().join('');
};
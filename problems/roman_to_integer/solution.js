/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const dictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    const arr = s.split('');
    const copy = [...arr];

    for (let i = 0; i < arr.length; i += 1) {
        if (dictionary[arr[i]] < dictionary[arr[i + 1]]) {
            copy.splice(i, 2, dictionary[arr[i + 1]] - dictionary[arr[i]], '');
            i++;
        } else if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            copy.splice(i, 3, dictionary[arr[i]] * 3, '', '');
            i += 2;
        } else if (arr[i] === arr[i + 1]) {
            copy.splice(i, 2, dictionary[arr[i]] * 2, '');
            i++;
        } else {
            copy.splice(i, 1, dictionary[arr[i]]);
        }
    }
    
    return copy.filter((el) => el !== '').reduce((acc, el) => el + acc, 0);
};
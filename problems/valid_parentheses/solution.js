/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    //if (s.length % 2 !== 0) return false;
    //if (s.startsWith('}') || s.startsWith(')') || s.startsWith(']')) return false;

    let str = s;
    const parentheses = ['()', '[]', '{}'];
    let i = 0;

    while (i < str.length) {
        if (parentheses.includes(str[i] + str[i + 1])) {
            str = str.slice(0, i) + str.slice(i + 2);
            i--;
        } else {
            i++;
        }
    }

    return str.length === 0;
};
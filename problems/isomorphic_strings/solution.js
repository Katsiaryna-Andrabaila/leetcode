/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;
    let obj = {};

    for (let i = 0; i < s.length; i+= 1) {
        if (!obj[s[i]]) {
            obj[s[i]] = t[i];
        }
        if (obj[s[i]] && obj[s[i]] !== t[i]) {
            return false;
        }
    }

    const set = new Set(Object.values(obj));

    if (set.size !== Object.values(obj).length) return false;

    return true;
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const dictionary = {};
    for (let i = 0; i < magazine.length; i += 1) {
        magazine[i] in dictionary
            ? dictionary[magazine[i]] += 1
            : dictionary[magazine[i]] = 1;
    }

    for (let i = 0; i < ransomNote.length; i += 1) {
        if (ransomNote[i] in dictionary && dictionary[ransomNote[i]] > 0) {
           dictionary[ransomNote[i]] -= 1;
        } else {
            return false;
        }
    }
    return true;
    /* const note = ransomNote;
    let set = magazine;

    for (let i = 0; i < note.length; i += 1) {
        if (set.includes(note[i])) {
            const letter = set.indexOf(note[i]);
            set = set.slice(0, letter) + set.slice(letter + 1);
        } else {
            return false;
        }
    }
    return true; */
};
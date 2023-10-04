/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    if (n === 0) return ["FizzBuzz"];

    let result = [];

    for (let i = 0; i < n; i += 1) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
            result.push("FizzBuzz");
        } else if ((i + 1) % 3 === 0) {
            result.push("Fizz");
        } else if ((i + 1) % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push((i + 1).toString());
        }
    }

    return result;
};
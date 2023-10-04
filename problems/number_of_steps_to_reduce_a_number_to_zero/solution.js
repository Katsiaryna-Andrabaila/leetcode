/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
    let number = num;
    let i = 0;

    while(number > 0) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number -= 1;
        }
        i += 1;
    }

    return i;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const num = BigInt(digits.join(''));
  return (num + 1n).toString().split('');
};
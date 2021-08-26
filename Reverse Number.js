/**
 * @param {number} x
 * @return {number}
 */

/**Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

 var reverse = function(x) {
    return(parseFloat(x.toString().split('').reverse().join(''))*Math.sign(x))
};
/**
 * @param {number} x
 * @return {number}
 */

/**Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

var reverse = function(x) {
    var sum = parseFloat(x.toString().split('').reverse().join(''))*Math.sign(x);
    if (sum < Math.pow(2, 31) && sum > (Math.pow(2, 31) *-1)) {
        return(sum)
    } else {
        return(0)
    }
};

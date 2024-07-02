/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    // Store the original value of x
    let original = x;
    let rev = 0;

    // Reverse the number
    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Check if the reversed number is equal to the original
    return rev === original;
};

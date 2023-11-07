/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

function isPalindrome(x) {
    if (x < 0)
        return false;

    var size = Math.floor(Math.log10(x) + 1);
    var num = x;
    var digit;
    var invert = 0;

    for (var i = 0; i < size; i++) {
        digit = Math.floor(num / Math.pow(10, size - i - 1));

        invert += digit * Math.pow(10, i);
        num -= digit * Math.pow(10, size - i - 1);
    }

    if (invert == x)
        return true;
    else
        return false;
}

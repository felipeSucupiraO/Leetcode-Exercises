/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

function plusOne (digits) {
    for (let i = 1; i <= digits.length; i++) {
        if (digits[digits.length - i] < 9) {
            digits[digits.length - i] += 1;
            return digits;
        }
        else {
            digits[digits.length - i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}

/* 
This algorithm has a time complexity of O(n), where n is the amount of digits, because in the worst case, the program will run through all the digits to give the awnser.

Also after reading the solutions I found out that I'm dumb.
*/
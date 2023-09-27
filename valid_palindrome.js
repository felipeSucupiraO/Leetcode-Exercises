/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

function validPalindrome (s) {
    let phrase = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let a = 0;
    let b = phrase.length - 1;

    for (let i = 0; i < phrase.length - 1 / 2; i++) {
        if (phrase[a] != phrase[b])
            return false;
        else {
            a++;
            b--;
        }
    }

    return true;
}

/* 
Accordingly to some articles I read, this algorithm should have an O(logn) time complexity, once it is a two pointers algorithm, but I may be wrong.
*/
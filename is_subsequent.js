/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

function isSubsequent(s, t) {
    var subTracker = 0, stringTracker = 0;
    
    while(stringTracker < t.length) {
        if (s[subTracker] == t[stringTracker])
            subTracker++;
        stringTracker++;
    }
 
    return subTracker >= s.length;
}

/* 
This is a terrible algorithm that runs with O(n) time complexity, where n is the size of the bigger string. I know there is a way to make this without iterating over all the string, but I don't know how.
*/
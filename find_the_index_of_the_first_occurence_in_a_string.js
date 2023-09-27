/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

function strStr (haystack, needle) {
    var j = 0;
    var index = -1;

    for (let i = 0 ; i < haystack.length ; i++) {
        if (haystack[i] == needle[j]) {
            if (j == 0) 
                index = i;
            
            if (j == needle.length - 1)
                return index;
            
            j++;
        }
        else {
            if (j != 0)
                i = index;
            j = 0;
        }
    }

    return -1;
}

/* 
The time complexity of this algorithm is O(n^2) (sadly), it's space complexity is O(n) with constant auxiliar space
*/
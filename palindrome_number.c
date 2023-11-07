#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool isPalindrome(int x) {
    if (x < 0) {
        return false;
    }

    int size = floor(log10(x) + 1);
    int num = x;
    int digit;
    int invert = 0;

    for (int i = 0; i < size; i++) {
        digit = floor(num / pow(10, size - i - 1));

        invert += digit * pow(10, i);
        num -= digit * pow(10, size - i - 1);
    }

    if (invert == x) {
        return true;
    } else {
        return false;
    }
}

int main () {
    isPalindrome(121);
    
    return 0;
}


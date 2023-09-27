/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInteger(romanNum) {
    let sum = 0;
    let lastValue;

    for (let n of romanNum) {
        switch (n) {
            case "I":
                sum += 1;
                break;
            case "V":
                if (lastValue == "I")
                    sum += 3;
                else
                    sum += 5;
                break;
            case "X":
                if (lastValue == "I")
                    sum += 8;
                else
                    sum += 10;
                break;
            case "L":
                if (lastValue == "X")
                    sum += 30;
                else
                    sum += 50;
                break;
            case "C":
                if (lastValue == "X")
                    sum += 80;
                else
                    sum += 100;
                break;
            case "D":
                if (lastValue == "C")
                    sum += 300;
                else
                    sum += 500;
                break;
            case "M":
                if (lastValue == "C")
                    sum += 800;
                else
                    sum += 1000;
                break;
            }

        lastValue = n;
    }

    return sum;
}

/* 
The algorithm's time complexity is O(n), where n is the size of the roman number. It is the minimum time complexity possible, since you need to iterate through the roman number no matter what.
*/
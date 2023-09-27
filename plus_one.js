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
}m
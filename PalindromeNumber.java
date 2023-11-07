class PalindromeNumber {
    public static void main(String [] args) {

    }

    static boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        int size = (int)Math.floor(Math.log10(x) + 1);
        int num = x;
        int digit;
        int invert = 0;

        for (int i = 0; i < size; i++) {
            digit = (int)Math.floor(num / Math.pow(10, size - i - 1));

            invert += digit * Math.pow(10, i);
            num -= digit * Math.pow(10, size - i - 1);
        }

        if (invert == x) {
            return true;
        } else {
            return false;
        }
    }
}
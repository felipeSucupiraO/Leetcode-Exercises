public class FindTheIndexOfTheFirstOccurenceInAString {
    static public int strStr(String haystack, String needle) {
        int j = 0;
        int index = -1;

        for (int i = 0 ; i < haystack.length() ; i++) {
            if (haystack.charAt(i) == needle.charAt(j)) {
                if (j == 0) {
                    index = i;
                }

                if (j == needle.length() - 1) {
                    return index;
                }

                j++;
            } else {
                if (j != 0) {
                    i = index;
                }

                j = 0;
            }
        }

        return -1;
    }
}
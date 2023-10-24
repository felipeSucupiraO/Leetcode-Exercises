/* 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 */

class SearchInsertPosition {
    public static void main (String[] args) {
        int[] arr = {1,3,5,6};
        System.out.println(binarySearch(arr, 7));
    }

    public static int binarySearch (int nums[], int target) {
        int min = 0;
        int max = nums.length - 1;
        int media = 0;
        while (max >= min) {
            media = (int)Math.floor((max + min) / 2);
            if (nums[media] == target) {
                return media;
            }
            else if (nums[media] > target) {
                max = media - 1;
            }
            else {
                min = media + 1;
            }
        }

        if (nums[media] > target) {
            return media;
        }
        else {
            return media + 1;
        }
    }
}
public class JumpGame {
    static public boolean canJump (int[] nums) {
        int currDistance = 1;

        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] >= currDistance) {
                currDistance = 1;
            }
            else {
                currDistance++;
            }
        }

        if (currDistance == 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
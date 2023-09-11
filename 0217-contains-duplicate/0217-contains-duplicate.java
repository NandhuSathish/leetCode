class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set set = new HashSet();
        for(int num:nums){
            if(!set.add(num)) return true;
        }
        return false;
    }
}
class Solution {
    public boolean isPerfectSquare(int num) {
        int start=1;
        int end=num/2;
        if(num==1) return true;
        while(start<=end){
            int mid = (start+end)/2;
            long sqr = (long)mid*mid; 
            if(sqr==num) return true;
            if(sqr < num){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }

        return false;
    }
}
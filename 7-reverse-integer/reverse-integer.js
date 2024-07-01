/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0 ;
    let sign = Math.sign(x);
    x = Math.abs(x);
    while(x > 0){
        rev = rev * 10 + (x % 10);
        x = Math.floor(x/10);
    }
    rev*=sign;

    if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31)) {
        return 0;
    }
    return rev ;
};
define([], function () {
    var recursions = {
        groupSum6: function(startIndex, nums, targetValue) {
            if(0 == targetValue && startIndex == nums.length) return true;
            if(startIndex >= nums.length) return false;
            if(targetValue <= -1) return false;
            if(nums[startIndex] == 6)
                return this.groupSum6(startIndex+1, nums, targetValue - 6);
            return this.groupSum6(startIndex + 1, nums, targetValue - nums[startIndex]) ||
                this.groupSum6(startIndex + 1, nums, targetValue);
        },

        // returns the nth factorial
        factorial: function(n){
            return function helper(n, ar){
                if(n <= 1) return n;
                if(typeof ar[n] !== 'undefined')
                  return ar[n];
                var fact = n*helper(n-1, ar);
                ar.push(fact);
                return fact;
            }(n, []);
        }
    };

    return recursions;
});


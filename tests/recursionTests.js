"use strict";
define(
    ['recursionPractice'],
    function(recursions) {
        var run = function() {
            test('Does it sum to 8?', function() {
                var bool = recursions.groupSum6(0, [2, 4, 6], 8);

                equal(bool, true);
            });

            test('Factorial 3! = 6', function() {

                equal(recursions.factorial(10), 3628800);
            });
        };
        return {run: run}
    }
);
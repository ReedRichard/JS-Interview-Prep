"use strict";
define(
    ['tricky'],
    function(tricky) {
        var run = function() {
            test('Sum 1 = 1', function() {

                equal(tricky.sum(1), 1);
            });

            test('Sum 1, 4, 9, -10 = 4', function() {

                equal(tricky.sum(1, 4, 9, -10), 4);
            });

            test('Sum [1, 4, 9, -10] = 4', function() {
                // This is testing javascript and not my function or logic.
                // I am studying for an interview. It would
                // otherwise be a waste of time to "test" core functionality in JS.
                equal(tricky.sum.apply(this, [1, 4, 9, -10]), 4);
                equal(tricky.sum.call(this, 1, 4, 9, -10), 4);
            });

            test('[[1], [2]] --> [1, 2]', function() {
                var arr = tricky.flattenArrays([[1], [2]]);
                equal(arr.length, 2);
            });

            test('[[1, 3], [2], [4], []] --> [1, 3, 2, 4]', function() {
                var arr = tricky.flattenArrays([[1, 3], [2], [4], []]);
                equal(arr.length, 4);
            });
        };
        return {run: run}
    }
);
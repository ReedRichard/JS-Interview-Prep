"use strict";
define(
    ['permutations'],
    function(permutations) {
        var run = function() {
            test('??  --> 11, 10, 00, 01', function() {
                var result = permutations.WildCardOneZero('??');
                QUnit.log(function() { result });
                equal(result.length, 4);
            });
        };
        return {run: run}
    }
);
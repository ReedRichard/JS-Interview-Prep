"use strict";
define(
    ['linkedList'],
    function(linkedList) {
        var run = function() {
            test('dummyLib should return the sum of the two supplied numbers.', function() {
                linkedList.add(1);

                equal(linkedList.toArray()[0], 1);
            });
        };
        return {run: run}
    }
);
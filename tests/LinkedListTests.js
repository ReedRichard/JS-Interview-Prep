"use strict";
define(
    ['linkedList'],
    function(linkedList) {
        var run = function() {
            test('Add one value', function() {
                linkedList.add(1);

                equal(linkedList.toArray()[0], 1);
            });

            test('create from array', function() {
                linkedList.fromArray([1, 2, 3, 4]);

                for(var i = 0; i < 4; i++){
                    equal(linkedList.toArray()[i], i  + 1);
                }
            });

            test('Remove third from last', function() {
                linkedList.fromArray([1, 2, 3, 4]);

                linkedList.removeThirdFromLast();
                var array = linkedList.toArray();
                equal(array.length === 3, true);
                equal(array[2] === 4, true);
                equal(array[1] === 3, true);
            });
        };
        return {run: run}
    }
);
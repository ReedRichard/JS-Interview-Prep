"use strict";
define(
    ['projectEuler', 'linkedList'],
    function(projectEuler, linkedList) {
        var run = function() {
            test('Multiples of 3 and 5', function() {
                linkedList.add(1);

                equal(linkedList.toArray()[0], 1);
            });
        };
        return {run: run}
    }
);
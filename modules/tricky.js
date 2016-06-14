define([], function () {
    var tricky = {

        // Sum all numbers, given any number of arguments
        sum: function () {
            var sumTotal = 0;
            for (var i = 0, length = arguments.length; i < length; i++) {
                sumTotal += arguments[i];
            }
            return sumTotal;
        },

        // [ [1], [2] ] --> [1, 2]
        flattenArrays: function (arr) {
            return arr.reduce(function (prev, curr) {
                return prev.concat(curr);
            });
        }
    };

    return tricky;
});


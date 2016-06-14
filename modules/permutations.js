define([], function () {
    var permutations = {
        // Out put all possibilities of 1010101 given a string with a ? wildcard
        // For example ?? --> 11, 10, 00, 01
        WildCardOneZero: function (unformedStr) {
            var binaryPermutations = [];
            (function helper(unformedStr, index, list) {
                if (index >= unformedStr.length) return unformedStr;
                if (unformedStr[index] === "?") {
                    var firstHalfStr = unformedStr.substring(0, index);
                    var lastHalfStr = unformedStr.substring(index + 1);
                    var addedOne = helper(firstHalfStr + "1" + lastHalfStr, index + 1, list);
                    var addedZero = helper(firstHalfStr + "0" + lastHalfStr, index + 1, list);
                    binaryPermutations.push(addedOne);
                    binaryPermutations.push(addedZero);
                } else {
                    var unchangedStr = helper(unformedStr, index + 1, list, unformedStr);
                    binaryPermutations.push(unchangedStr);
                    console.log(unchangedStr);
                }
            })(unformedStr, 0, binaryPermutations);

             return binaryPermutations.filter(function(element) {
                if(element != undefined) return element;
            });
        }
    };

    return permutations;
});


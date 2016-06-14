"use strict"

requirejs.config({
    baseUrl: "modules/",
    paths: {
        QUnit: "../vendor/qunit/qunit-1.23.1"
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});


require(['QUnit',
    '../tests/linkedListTests',
    '../tests/permutationTests',
    '../tests/recursionTests',
    '../tests/trickyTests',
    '../tests/eulerTests',
    'linkedList',
    'permutations',
    'recursionPractice',
    'tricky',
    'projectEuler'
     ],

    function (QUnit, linkedListTests, permutationTests,
              recursionTests, trickyTests, eulerTests,

              linkedList, permutations, recursions, tricky, projectEuler) {

        linkedListTests.run();
        permutationTests.run();
        recursionTests.run();
        trickyTests.run();
        eulerTests.run();

        QUnit.load();
        QUnit.start();
    });

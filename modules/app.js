"use strict"

requirejs.config({
    baseUrl: "modules/",
    paths: {
        QUnit: "../vendor/qunit/qunit-1.23.1"
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});


require(['QUnit', '../tests/linkedListTests', 'linkedList'],
    function (QUnit, linkedListTests, linkedList) {

    linkedListTests.run();

    QUnit.load();
    QUnit.start();
});

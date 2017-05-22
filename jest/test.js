const lib = require('./lib');

describe('Test mocking global variable', function () {

    test('Native global Object', function() {
        expect(lib().localScope).toBeInstanceOf(Object);
        expect(lib().globalScope).toBeInstanceOf(Object);
    });

    test('Mock global Object and use in local scope', function() {
        global.Object.create = false;

        expect(lib().localScope).toBe('localScope');
    });

    test('Mock global Object and use in global scope', function() {
        global.Object.create = false;

        expect(lib().globalScope).toBe('globalScope');
    });
});

describe('Test mocking global variable', function () {

    beforeEach(jest.resetModules);

    test('Mock global Object and use in local scope', function() {
        global.Object.create = false;
        const lib = require('./lib');

        expect(lib().localScope).toBe('localScope');
    });

    test('Mock global Object and use in global scope', function() {
        global.Object.create = false;
        const lib = require('./lib');

        expect(lib().globalScope).toBe('globalScope');
    });
});

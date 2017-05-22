/**
 * @module lib
 */
(function(global) {
    var globalScope = Object.create || 'globalScope';

    /**
     * @returns {{localScope: (*|string), globalScope: (*|string)}}
     */
    function lib() {
        var localScope = Object.create || 'localScope';
        return {
            localScope : localScope,
            globalScope : globalScope
        };
    }

    var defineAsGlobal = true;
    if(typeof exports === 'object') {
        module.exports = lib;
        defineAsGlobal = false;
    }

    if(typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('lib', function(provide) {
            provide(lib);
        });
        defineAsGlobal = false;
    }

    if(typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = lib;
        });
        defineAsGlobal = false;
    }

    defineAsGlobal && (global.lib = lib);
})(this);

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
    /* istanbul ignore next */
    if(typeof exports === 'object') {
        module.exports = lib;
        defineAsGlobal = false;
    }
    /* istanbul ignore next */
    if(typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('lib', function(provide) {
            provide(lib);
        });
        defineAsGlobal = false;
    }
    /* istanbul ignore next */
    if(typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = lib;
        });
        defineAsGlobal = false;
    }
    /* istanbul ignore next */
    defineAsGlobal && (global.lib = lib);
})(this);

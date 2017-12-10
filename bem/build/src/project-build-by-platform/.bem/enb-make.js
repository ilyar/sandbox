const techs = require('enb-bem-techs');
const provide = require('enb/techs/file-provider');
const bemhtml = require('enb-bemxjst/techs/bemhtml');
const html = require('enb-bemxjst/techs/bemjson-to-html');
const css = require('enb-css/techs/css');
const js = require('enb-js/techs/browser-js');

const level = {
    'phone': [
        { path: '../lib/common.blocks', check: false },
        { path: '../lib/phone.blocks', check: false },
        'common.blocks',
        'phone.blocks'
    ],
    'desktop': [
        { path: '../lib/common.blocks', check: false },
        { path: '../lib/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ]
};

module.exports = function (config) {

    config.nodes('bundle/*', function (nodeConfig) {
        nodeConfig.addTech([provide, {
            target: '?.bemjson.js'
        }]);
    });

    const platform = Object.keys(level);
    platform.forEach(function (name) {
        config.nodes('bundle/*', function (nodeConfig) {
            nodeConfig.addTechs([
                [techs.levels, {
                    target: '?.' + name + '.levels',
                    levels: level[name]
                }],
                [techs.bemjsonToBemdecl, {
                    target: '?.' + name + '.bemdecl.js'
                }],
                [techs.deps, {
                    levelsTarget: '?.' + name + '.levels',
                    bemdeclFile: '?.' + name + '.bemdecl.js',
                    target: '?.' + name + '.deps.js'
                }],
                [techs.files, {
                    filesTarget: '?.' + name + '.files',
                    dirsTarget: '?.' + name + '.dirs',
                    levelsTarget: '?.' + name + '.levels',
                    depsFile: '?.' + name + '.deps.js'
                }],
                [css, {
                    filesTarget: '?.' + name + '.files',
                    target: '?.' + name + '.css'
                }],
                [js, {
                    filesTarget: '?.' + name + '.files',
                    target: '?.' + name + '.js'
                }],
                [bemhtml, {
                    filesTarget: '?.' + name + '.files',
                    target: '?.' + name + '.bemhtml.js'
                }],
                [html, {
                    bemhtmlFile: '?.' + name + '.bemhtml.js',
                    bemjsonFile: '?.bemjson.js',
                    target: '?.' + name + '.html'
                }]
            ]);

            nodeConfig.addTargets([
                '?.' + name + '.css',
                '?.' + name + '.js',
                '?.' + name + '.html'
            ]);
        });
    });
};

// Подключаем модули технологий
const techs = require('enb-bem-techs');
const provide = require('enb/techs/file-provider');
const bemhtml = require('enb-bemxjst/techs/bemhtml');
const html = require('enb-bemxjst/techs/bemjson-to-html');
const css = require('enb-css/techs/css');
const js = require('enb-js/techs/browser-js');

module.exports = function (config) {

    // Настраиваем сборку бандла
    config.node('page', function (nodeConfig) {

        // Декларируем модули технологий,
        // которые могут учавствовать в сборке таргетов.
        nodeConfig.addTechs([
            // Используем базовые технологии, чтобы получить
            // список файлов, которые будут учавствовать в сборке.
            [techs.levels, {
                levels: [
                    { path: '../lib/common.blocks', check: false },
                    { path: '../lib/common.blocks', check: false },
                    'blocks'
                ]
            }],                                       // (1) -> `?.levels`
            [provide, {
                target: '?.bemjson.js'
            }],                                       // (2) -> `?.bemjson.js`
            [techs.bemjsonToBemdecl],                 // (3) -> `?.bemdecl.js`
            [techs.deps],                             // (4) `?.bemdecl.js` -> `?.deps.js`
            [techs.files],                            // (5) `?.levels` + `?.deps.js` -> `?.files`

            // Технологии принимают на вход список файлов. Таргет, в котором хранится список файлов,
            // задается опцией `filesTarget` (по умолчанию — `?.files`). Для сборки будут
            // использоваться только файлы, суффиксы которых указаны опцией `sourceSuffixes`.
            [css],     // Опция `sourceSuffixes` по умолчанию равна `['css']`
            [js, {
                target: '?.js'
            }],      // Опция `sourceSuffixes` по умолчанию равна `['vanilla.js', 'js', 'browser.js']`
            [bemhtml], // Опция `sourceSuffixes` по умолчанию равна `['bemhtml', 'bemhtml.xjst']`.

            // Технология принимает на вход `?.bemjson.js` и `?.bemhtml.js` таргеты.
            [html]
        ]);

        // Объявляем таргеты, которые хотим собрать.
        nodeConfig.addTargets([
            '?.css',
            '?.js',
            '?.html'
        ]);
    });
};

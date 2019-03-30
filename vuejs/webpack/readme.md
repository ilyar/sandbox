# Vue.js and Webpack 4 From Scratch

## Base application structure

Create `package.json` and install dependence

```bash
npm init
npm install --save vue
npm install --save-dev webpack webpack-cli vue-loader vue-template-compiler html-webpack-plugin
```

```json
{
  "name": "vuejs-webpack",
  "version": "1.0.0",
  "description": "Vue.js and Webpack 4 From Scratch",
  "license": "MIT",
  "scripts": {
    "build": "webpack --config build/development.js"
  },
  "dependencies": {
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "vue-loader": "^15.7.0",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0"
  }
}
```

Application structure

```text
.
├── build
│   └── development.js
├── package.json
└── src
    ├── app.html
    ├── app.js
    └── app.vue

```

```html
<!-- file: public/index.html -->
<!-- file: src/app.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

```javascript
// file: src/app.js
import Vue from 'vue'
import App from './app.vue'
new Vue({
  render: h => h(App)
}).$mount('#app')
```

```vue
<!-- file: src/app.vue -->
<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>
```

```javascript
// file: build/development.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('path')
const rootDir = fs.dirname(__dirname)
module.exports = {
  mode: 'development',
  entry: {
    index: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: fs.join(rootDir, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Vue app with webpack 4',
      template: fs.join(rootDir, 'src', 'app.html')
    })
  ]
}
```

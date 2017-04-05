# exist-utils [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![dependencies Status][deps-image]][deps-url] [![devDependencies Status][deps-dev-image]][deps-dev-url]

This package is a collection of util functions that emulate _CoffeeScript_ existence operator.
While waiting that some of them are integrated in the [next version of JavaScript](https://github.com/tc39/proposals), you can use this package while porting from _CoffeeScript_, etc.


## Installation

### Node Installation

```sh
npm install exist-utils
```

You can then `ExistUtils = require('exist-utils')` or `import * as ExistUtils from 'exist-utils'`.

### Browser Installation

Use the minified UMD build in the `dist` folder: [here](dist/exist-utils.min.js).
It exports a global `window.ExistUtils` when imported as a `<script>` tag.


## Usage

Every code snippet will be presented in 3 different styles: Node.js `require`, Node.js `import` and Browser Javascript (with required HTML `<script>`s).

### TODO


## License

MIT, Copyright (c) 2017 Louis Brunner



[npm-image]: https://img.shields.io/npm/v/exist-utils.svg
[npm-url]: https://npmjs.org/package/exist-utils
[travis-image]: https://travis-ci.org/LouisBrunner/exist-utils.svg?branch=master
[travis-url]: https://travis-ci.org/LouisBrunner/exist-utils
[coveralls-image]: https://coveralls.io/repos/github/LouisBrunner/exist-utils/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/LouisBrunner/exist-utils?branch=master
[deps-image]: https://david-dm.org/louisbrunner/exist-utils/status.svg
[deps-url]: https://david-dm.org/louisbrunner/exist-utils
[deps-dev-image]: https://david-dm.org/louisbrunner/exist-utils/dev-status.svg
[deps-dev-url]: https://david-dm.org/louisbrunner/exist-utils?type=dev

# exist-utils [![NPM Version][npm-image]][npm-url] ![Build Status][ci-image] [![Coverage Status][coveralls-image]][coveralls-url] [![dependencies Status][deps-image]][deps-url] [![devDependencies Status][deps-dev-image]][deps-dev-url]

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

Each function as a full name (i.e. `exists`) and a shorthand (i.e. `ex`), both are specified in the title of their description.
You can check the equivalence with _CoffeeScript_ operators in the [following section](#coffeescript-equivalents).

### `exists` (`ex`)

Example:
```js
if (!exists(arg)) {
  error('missing arg');
}
```

This is the equivalent to _CoffeeScript_ `val?`, it checks if a value "exists" (is neither `null` nor `undefined`).

### `existsChained` (`exc`)

Example:
```js
if (!existsChained(arg, 'callback')) {
  error('no callback specified');
}
```

This is the equivalent to _CoffeeScript_ `obj?.prop?`, it checks if a whole chain "exists".

### `existsChainedValue` (`excv`)

Example:
```js
const callback = existsChainedValue(arg, 'callback');
if (!exists(callback)) {
  error('no callback specified');
  return;
}
callback();
```

This is the equivalent to _CoffeeScript_ `obj?.prop`, it checks if a whole chain "exists" and returns the final value.

### `elvis` (`el`)

Example:
```js
val = elvis(arg, 42);
```

This is the equivalent to _CoffeeScript_ `val ? default` and a safer version to `val || default`.
It returns the second value if the first one doesn't "exist".

### `callsIfExist` (`fnex`)

Example:
```js
callsIfExist(func, 1, 2);
```

This is the equivalent to _CoffeeScript_ `func?(1, 2)`, it checks the existence of the function and calls it with the provided arguments.

### `callsIfExistObj` (`fnexo`)

Example:
```js
callsIfExistObj(obj, 'func', 1, 2);
```

This is the equivalent to _CoffeeScript_ `obj?.func?(1, 2)`, it checks the existence of the function and calls it with the provided arguments while providing the right value for `this`.


## _CoffeeScript_ equivalents

| CoffeeScript             | `exist-utils`                      | `exist-utils` shorthand    |
|:-------------------------|:-----------------------------------|:---------------------------|
| `val?`                   | `exists(val)`                      | `ex(val)`                  |
| `obj?.prop?`             | `existsChained(obj, 'prop')`       | `exc(obj, 'prop')`         |
| `obj?.prop`              | `existsChainedValue(obj, 'prop')`  | `excv(obj, 'prop')`        |
| `val = arg ? 3`          | `val = elvis(arg, 3)`              | `val = el(arg, 3)`         |
| `func?(a, b)`            | `callsIfExist(func, a, b)`         | `fnex(func, a, b)`         |
| `obj.func?(a, b)`        | `callsIfExistObj(obj, func, a, b)` | `fnexo(obj, func, a, b)`   |


## License

MIT, Copyright (c) 2017-2020 Louis Brunner



[npm-image]: https://img.shields.io/npm/v/exist-utils.svg
[npm-url]: https://npmjs.org/package/exist-utils
[ci-image]: https://github.com/LouisBrunner/exist-utils/workflows/Build/badge.svg
[coveralls-image]: https://coveralls.io/repos/github/LouisBrunner/exist-utils/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/LouisBrunner/exist-utils?branch=master
[deps-image]: https://david-dm.org/louisbrunner/exist-utils/status.svg
[deps-url]: https://david-dm.org/louisbrunner/exist-utils
[deps-dev-image]: https://david-dm.org/louisbrunner/exist-utils/dev-status.svg
[deps-dev-url]: https://david-dm.org/louisbrunner/exist-utils?type=dev

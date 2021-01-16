# Is stupid [![npm version](https://badge.fury.io/js/is-stupid.svg)](https://badge.fury.io/js/is-stupid)

```
A package to figure out if one is stupid.
```



## Get Started

### Installation

1. Install using `npm` :

   ```bash
   npm i is-stupid
   ```

2. Install using `yarn`:

   ```bash
   yarn install is-stupid
   ```

3. With `Deno`:

   ```js
   import isStupid from 'https://unpkg.com/is-stupid/dist/index.js'
   ```

   

### Basic Usage

This package uses both default exports and named exports, as such, it requires ES modules to be used.

For modern environments with ES module support (such as `typescript`, or usage with bundlers):

```js
import isStupid from 'is-stupid';

if (isStupid) {
    console.log('oh no');
}
```

In CommonJS environments (such as Node), you may use [`esm`](https://www.npmjs.com/package/esm) to import it:

```js
const isStupid = require('esm')(module)('is-stupid');
```



## API

### [default]: `boolean`

A pre-calculated value for performance reasons.

```js
import isStupid from 'is-stupid';

isStupid;
```



### recalculate: `() => boolean`

Do calculation during runtime for maximum accuracy.

```js
import { recalculate } from 'is-stupid';

recalculate();
```



### smartRecalculate: `() => StupidItem`

Use heuristics, as well as additional utility functions. Can be slower than above functions.

```js
import { smartRecalculate } from 'is-stupid';

smartRecalculate();
```



### StupidItem: `class extends Boolean`

An item wrapping around `Boolean` to provide further functionality.

#### StupidItem.IS_SURE: `boolean`

A variable indicating how sure the item is.

```js
StupidItem.IS_SURE
```

#### StupidItem.prototype.isSureAboutBeingSure: `() => boolean`

Attempt to persuade the item.

```js
smartRecalculate()
    .isSureAboutBeingSure()
```

#### StupidItem.prototype.takeSomeTimeToRethinkIsSure: `() => Promise<boolean>`

Asynchronously give time for the item to think about it.

```js
await smartRecalculate()
    .takeSomeTimeToRethinkIsSure()
```

#### StupidItem.prototype.takeSomeTimeToRethinkIsSureSync: `() => boolean`

Synchronously give time for the item to think about it.

```js
await smartRecalculate()
    .takeSomeTimeToRethinkIsSureSync()
```

#### StupidItem.prototype[Symbol.toPrimitive]: `() => boolean`

Converts the item to a primitive.

```js
stupidItem[Symbol.toPrimitive]()
```





## Testing

Install dev-dependencies, then test:

```bash
$ npm i -D && npm t
```



## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/sxxov/is-stupid/issues/new).



## Author

**Jason Lim**

* [github.com/sxxov](https://github.com/sxxov)
* [twitter.com/_sxxov](https://twitter.com/_sxxov)



## License

Copyright © 2021 Jason Lim. Released under the WTFPL license.
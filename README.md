**WIP -- Do not use this yet if you care about Typescript support.**

This project just bundles all the [just](https://github.com/angus-c/just) utilities into a
single ES module package.

# Usage

Each function is exported as the camelCased version of the original function name, minus the "just" prefix.

```js
import { safeGet, mapValues, percentile, isEmpty } from 'just-es';
```

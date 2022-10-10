# What is this?

This is a low footprint function which takes another function as an input and caches the result of that function based on given arguments.

# How do I install it?

You can install it by using the following command:

```bash
npm install @cadienvan/memoize
```

# How to use it?

Simply import the module and start using it as follows:

```js
import { memoize } from "@cadienvan/memoize";
function testFn(n, n2) {
  for (let i = 0; i < n * n2; i++) {}

  return true;
}

const testFnCached = memoize(testFn);
// You can use the function as you would normally
testFnCached(100, 100); // Same as tesfFn(100, 100)
```

The testFnCached will now cache the result of the testFn function based on the arguments passed to it.

# Does this package support async functions?

Yes, it does. Just import the `memoizeAsync` function instead of the `memoize` function.

```js
import { memoizeAsync } from "@cadienvan/memoize";
async function testFn() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
}
const testFnCached = memoize(testFn);
await testFnCached(); // Same as await tesfFn()
```

# How does this work?

This package uses the `JSON.stringify` function to convert the arguments passed to the function into a string. This string is then used as a key to store the result of the function in a cache object. The next time the function is called with the same arguments, the result will be retrieved from the cache object instead of calling the function again.

import { memoize } from "../index.js";

function testFn(n, n2) {
  for (let i = 0; i < n * n2; i++) {}

  return true;
}

const testFnCached = memoize(testFn);

let pf = performance.now();
testFn(100000000, 5);
testFn(100000000, 5);
testFn(100000000, 5);
testFn(100000000, 5);
testFn(100000000, 5);
console.log("Execution time: ", performance.now() - pf);
pf = performance.now();
testFnCached(100000000, 5);
testFnCached(100000000, 5);
testFnCached(100000000, 5);
testFnCached(100000000, 5);
testFnCached(100000000, 5);
console.log("Execution time cached: ", performance.now() - pf);

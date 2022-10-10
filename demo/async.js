import { memoizeAsync } from "../index.js";

async function testFn() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
}

const testFnCached = memoizeAsync(testFn);

let pf = performance.now();
await testFn();
await testFn();
await testFn();
await testFn();
await testFn();
console.log("Execution time: ", performance.now() - pf);
pf = performance.now();
await testFnCached();
await testFnCached();
await testFnCached();
await testFnCached();
await testFnCached();
console.log("Execution time cached: ", performance.now() - pf);

export function memoize(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  const cache = {};
  return function (...arg) {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...arg);
    cache[key] = result;
    return result;
  };
}

export function memoizeAsync(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  const cache = {};
  return async function (...arg) {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      return cache[key];
    }
    const result = await fn(...arg);
    cache[key] = result;
    return result;
  };
}

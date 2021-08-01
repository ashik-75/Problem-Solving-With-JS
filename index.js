const length = 100;

const array = [...Array(length).keys()];

const { performance } = require('perf_hooks');

const start = performance.now();

for (let i = 0; i < array.length; i++) {
  console.log(i);
}

const end = performance.now();

console.log('first ', end - start);

// another

const anStart = performance.now();

for (let i = 0; i < length; i++) {
  console.log(i);
}
const anEnd = performance.now();

console.log('second ', anEnd - anStart);

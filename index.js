// flat multidimentional array

const arr = [
  ['zara', 'alex'],
  [1, 2, 3],
  ['zakir', 'sabbir', ['forhad', 'tamim', ['zara', 'sara', 'akib']]],
];

// it works 2d array
console.log(arr.flat());

// it works infinite 2d array
console.log(arr.flat(Infinity));

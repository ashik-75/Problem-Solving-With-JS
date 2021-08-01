// remove falsy value from array (Task)
// six falsy values in JS,they are
// "" (empty string)
// null
// NaN
// false
// undefined
// 0 (zero)

const values = [
  'akib',
  null,
  'zara',
  0,
  NaN,
  '',
  10,
  undefined,
  'ashik',
  true,
  false,
];

// way one

const newArr = [];

values.forEach((dt) => {
  if (dt) {
    newArr.push(dt);
  }
});

console.log(newArr);

// way two

const result = values.filter((dt) => Boolean(dt));
// you can also do it  another way

const another = values.filter(Boolean);
console.log(another);

console.log(result);

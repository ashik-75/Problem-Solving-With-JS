function multiTable(num) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${num} = ${num * (i + 1)}`)
    .join('/n');
}

console.log(multiTable(7));

function addBinary(a, b) {
  let init = a + b;
  let binary = [];
  while (init > 0) {
    binary.push(init % 2);
    init = Math.floor(init / 2);
  }

  return binary.reverse().join('');
}

console.log(addBinary(10, 7));

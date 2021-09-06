function towerBuilder(nFloors) {
  // build here
  let data = [];
  for (let i = 0; i < nFloors; i++) {
    const totalLength = 2 * nFloors - 1;
    const extra = totalLength - (2 * i + 1);
    let div = Math.floor(extra / 2);
    let format = `${' '.repeat(div)}${'*'.repeat(2 * i + 1)}${' '.repeat(div)}`;
    data.push(format);
  }

  return data;
}

console.log(towerBuilder(6));

console.log('*'.repeat(10));

function waterbombs(fire, w) {
  const dt = fire.split('Y');
  let count = 0;
  for (let i of dt) {
    count += Math.ceil(i.length / w);
  }
  return count;
}

console.log(waterbombs('xxxxxYxYx', 2));

console.log(Math.ceil(2.3));

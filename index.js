String.prototype.toAlternate = function () {
  return this.split('')
    .map((dt) =>
      dt.toLowerCase() === dt ? dt.toUpperCase() : dt.toLowerCase()
    )
    .join('');
};

console.log('testFued2343 suEd54'.toAlternate());

console.log('1'.toUpperCase());

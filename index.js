function removeEveryOther(arr) {
  //your code here

  const newdata = arr.filter((dt, index) => !(index % 2));
  return newdata;
}

console.log(
  removeEveryOther(['akash', 'shakib', 'zakir', 'musha', 'arif', 'ayon'])
);

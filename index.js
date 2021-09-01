function maskify(cc) {
  let dt = cc.split('');
  let length = dt.length;

  if (length <= 4) return cc;

  for (let i = 0; i < length; i++) {
    if (i < length - 4) {
      dt[i] = '#';
    }
  }
  return dt.join('');
}

console.log(maskify('testing3217538489'));

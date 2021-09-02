function validate(number) {
  let data = String(number).split('').map(Number);

  if (data.length % 2 === 0) {
    data = data.map((dt, index) => {
      if (index % 2 === 0) {
        return dt * 2;
      } else {
        return dt;
      }
    });
  } else {
    data = data.map((dt, index) => {
      if (index % 2 === 1) {
        return dt * 2;
      } else {
        return dt;
      }
    });
  }

  data = data.reduce((acc, curr) => {
    if (curr > 9) {
      return acc + (curr - 9);
    } else {
      return acc + curr;
    }
  }, 0);

  return data % 10 === 0;
}

console.log(validate(1034));

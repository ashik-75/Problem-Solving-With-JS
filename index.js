function points(games) {
  let totalPoint = 0;
  let data = games.map((dt) => dt.split(':'));

  data.map((dt) => {
    if (dt[0] > dt[1]) {
      totalPoint += 3;
    } else if (dt[0] === dt[1]) {
      totalPoint += 1;
    }
  });

  return totalPoint;
  // your code here
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'])
);

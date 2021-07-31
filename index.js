function updateLight(current) {
  // 8kyu
  const lights = ['green', 'yellow', 'red'];
  let index = lights.indexOf(current);

  let getInd = index === lights.length - 1 ? 0 : index + 1;
  return lights[getInd];
}

console.log(updateLight('red'));

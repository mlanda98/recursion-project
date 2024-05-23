function fibs(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1){
    return [0];
  }
  let fibArray = [0, 1];
  for (let i = 2; i < num; i++){
    fibArray.push(fibArray[i - 1] + fibArray [i - 2]);
  }
  return fibArray;
};

console.log(fibs(4));

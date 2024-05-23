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

function fibRec(num, fibArray = [0, 1]){
  if (num <= 0){
    return [];
  } else if (num === 1){
    return [0];
  } else if (fibArray.length >= num){
    return fibArray.slice(0, num);
  }

  const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  fibArray.push(nextFib);
  return fibRec(num, fibArray);
}
console.log(fibRec(4));
const nod = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let result = 0;
  const num1 = getRandomNumber(1, 100);
  console.log(num1);
  const num2 = getRandomNumber(1, 100);
  console.log(num2);
  const arr = [num1, num2];
  const lesserNumber = Math.min(...arr);
  for (let i = 2; i <= lesserNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  if (result === 0) {
    result = 1;
  }
  console.log(result);
  return result;
};
nod();

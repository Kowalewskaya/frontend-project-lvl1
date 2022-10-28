const genProgression = (startProgression, progressionLength, stepProgression) => {
  const arr = [];
  const censored = '..';
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomElementProgression = getRandomNumber(0, progressionLength - 1);
  for (let i = startProgression; arr.length <= progressionLength - 1; i += stepProgression) {
    arr.push(i);
  }
  arr[randomElementProgression] = censored;
  console.log(arr.join(' '));
  return arr.join(' ');
};

genProgression(5, 7, 2);

export const generateRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

export const generateRandomNumberInRange = (minNumber, maxNumber) => Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber,
);

export const isEven = (number) => number % 2 === 0;

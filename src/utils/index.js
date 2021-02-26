export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1) + min);

export const getRandomOperation = (options) => {
  const minIndex = 0;
  const maxIndex = options.length - 1;

  const randomIndex = getRandomNumber(minIndex, maxIndex);

  return options[randomIndex];
};

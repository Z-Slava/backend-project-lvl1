import readlineSync from 'readline-sync';

export const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const greetUserByName = (name) => {
  console.log(`Hello, ${name}!`);
};

export const showFailMessage = (userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export const showCongratMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const showRetryMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const askNameAndShowGreetMessage = () => {
  showWelcomeMessage();
  const name = askUserName();
  greetUserByName(name);
};

export default askNameAndShowGreetMessage;

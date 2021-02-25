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

const askNameAndShowGreetMessage = () => {
  showWelcomeMessage();
  const name = askUserName();
  greetUserByName(name);
};

export default askNameAndShowGreetMessage;

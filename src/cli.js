import readlineSync from 'readline-sync';

export const requestUserName = () => readlineSync.question('May I have your name? ');

export const requestAnswer = () => String(readlineSync.question('Your answer: '));

export const createUserBasedMessages = (userName) => ({
  sendGreetMessage: () => console.log(`Hello, ${userName}!`),
  sendTryAgainMessage: () => console.log(`Let's try again, ${userName}!`),
  sendCongratulationMessage: () => console.log(`Congratulations, ${userName}!`),
});

export const sendWelcomeMessage = () => console.log('Welcome to the Brain Games!');
export const sendRulesMessage = (rules) => console.log(rules);
export const sendQuestionMessage = (askedQuestion) => console.log(`Question: ${askedQuestion}`);
export const sendIncorrectAnswerMessage = (actualAnswer, correctAnswer) => console.log(
  `'${actualAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
);
export const sendCorrectMessage = () => console.log('Correct!');

import * as cli from '../cli.js';

const DEFAULT_NUMBER_OF_ROUNDS = 3;

const getAnswerForQuestion = (question) => {
  cli.sendQuestionMessage(question);
  return cli.requestAnswer();
};

const playGame = (rules, getQuestionAndAnswer, numberOfRounds) => {
  let isPlayerWinner = false;

  cli.sendRulesMessage(rules);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const actualAnswer = getAnswerForQuestion(question);

    if (actualAnswer !== correctAnswer) {
      cli.sendIncorrectAnswerMessage(actualAnswer, correctAnswer);
      isPlayerWinner = false;
      break;
    }

    cli.sendCorrectMessage();
    isPlayerWinner = true;
  }

  return isPlayerWinner;
};

export const runGame = (rules, getQuestionAndAnswer, numberOfRounds = DEFAULT_NUMBER_OF_ROUNDS) => {
  cli.sendWelcomeMessage();
  const userName = cli.requestUserName();
  const userBasedMessages = cli.createUserBasedMessages(userName);
  userBasedMessages.sendGreetMessage();

  if (!rules) {
    return;
  }

  const isPlayerWinner = playGame(rules, getQuestionAndAnswer, numberOfRounds);

  if (isPlayerWinner) {
    userBasedMessages.sendCongratulationMessage();
  } else {
    userBasedMessages.sendTryAgainMessage();
  }
};

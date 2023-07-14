import * as base from './games/base.js';
import * as evenGame from './games/even.js';
import * as calcGame from './games/calc.js';

export const runIntroGame = () => base.runGame();
export const runEvenGame = () => base.runGame(evenGame.RULES, evenGame.getQuestionAndAnswer);
export const runCalcGame = () => base.runGame(calcGame.RULES, calcGame.getQuestionAndAnswer);

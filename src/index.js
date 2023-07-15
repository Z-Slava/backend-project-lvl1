import * as base from './games/base.js';
import * as evenGame from './games/even.js';
import * as calcGame from './games/calc.js';
import * as gcdGame from './games/gcd.js';

export const runIntroGame = () => base.runGame();
export const runEvenGame = () => base.runGame(evenGame.RULES, evenGame.getQuestionAndAnswer);
export const runCalcGame = () => base.runGame(calcGame.RULES, calcGame.getQuestionAndAnswer);
export const runGcdGame = () => base.runGame(gcdGame.RULES, gcdGame.getQuestionAndAnswer);

'use strict';

// generate new secret number randomly
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// secret number function
let number = number => {
  document.querySelector('.number').textContent = number;
};
number(secretNumber);
console.log(secretNumber);
number('?');

// message function
const message = function (message) {
  document.querySelector('.message').textContent = message;
};

// initial value of score and highscore
let score = 20;
let highscore = 0;

// style body backgroundColor function
const color = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// style the wider number function
const width = function (width) {
  document.querySelector('.number').style.width = width;
};
const size = function (size) {
  document.querySelector('.message').style.fontSize = size;
  document.querySelector('.score').style.fontSize = size;
};

// guess number casses

let gamePlaying = true;

document
  .querySelector('.check')
  .addEventListener('click', function guessFunction() {
    if (gamePlaying) {
      // input guess number
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess);

      // empty or 0 guess number
      if (!guess) {
        message('⛔ No Number!');
      }

      // guess high or low number
      else if (guess !== secretNumber) {
        guess > secretNumber ? message('📈 Too high') : message('📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        if (score == 0) {
          message('😕 You lost the game');
          color('#af2d2d');
          gamePlaying = false;
        }
      }

      // guess the correct number
      if (guess === secretNumber) {
        number(secretNumber);
        message('👏 Correct Number!');
        color('#ade498');
        size('3rem');
        width('30rem');
        gamePlaying = false;

        // set the highscore
        if (highscore < score) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      }
    }
  });

// reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number(secretNumber);
  console.log(secretNumber);
  number('?');
  document.querySelector('.guess').value = '';
  message('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  color('rgb(44, 44, 44)');
  width('15rem');
  size('2rem');
  gamePlaying = true;
});

/*
// for stop click the button
if (message === '👏 Correct Number!' || message === '😕 You lost the game') {
  document
    .querySelector('.check')
    .removeEventListener('click', guessFunction(), false);
}
*/

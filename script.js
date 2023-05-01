'use strict';

/*
console.log(document.querySelector('.message').textContent);
//queryselector.message to read the element, and with .textContentwe can read content inside after as well
console.log('hi');
document.querySelector('.message').textContent = '🏆 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// 073 handling click events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // document.querySelector('.number').textContent = secretNumber; // delete

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🏆 Correct Number!');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundImage = 'url(Dance.gif)';

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundImage = 'url(Wrong.gif)';
    } else {
      displayMessage('💥  You lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
});

// after pressing again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundImage = 'url(Black.gif)';
  document.querySelector('.number').style.width = '15rem';
});

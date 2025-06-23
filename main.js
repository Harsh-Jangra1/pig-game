'use stirict';

// Selecting Elements
const player0 = document.querySelector('#name--0');
const player1 = document.getElementById('name--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;



btnRoll.addEventListener('click', function () {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // console.log(randomNum);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    if (diceEl !== 1) {
        currentScore += diceNum;
        current0.textContent = currentScore;
    } else {

    }
})
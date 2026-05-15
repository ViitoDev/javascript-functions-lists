let numbersList = [];
let limitNumber = 10;
let secretNumber = genterateRandomNumber();
let attempts = 1;

function showText(tag, text) {
    let placement = document.querySelector(tag);
    placement.textContent = text;
}

function initialMessage() {
    showText('h1', 'Welcome to the secret number game!');
    showText('p', 'Choose a number: 0 - 10');
}

initialMessage();

function verifyGuess() {
    let guess = +document.querySelector('input').value;
    if (guess === secretNumber) {
        showText('h1', 'You guessed!');
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt'
        let messageAttempts = `You found the secret number: ${secretNumber} with ${attempts} ${attemptWord}!`;
        showText('p', messageAttempts);
        document.getElementById('new_game').removeAttribute('disabled')
    } else if (guess < secretNumber) {
        showText('h1', 'Wrong!');
        showText('p', 'The secret number is higher. Try again.');
    } else {
        showText('h1', 'Wrong!');
        showText('p', 'The secret number is lower. Try again.');
    }
    attempts++;
    clearField();
}

function genterateRandomNumber() {
    let selectedNumber = parseInt(Math.random() * limitNumber + 1);
    let elementsQuantity = numbersList.length;

    if (elementsQuantity == limitNumber) {
        numbersList = [];
    }

    if (numbersList.includes(selectedNumber)) {
        return genterateRandomNumber();
    } else {
        numbersList.push(selectedNumber);
        return selectedNumber;
    }
}

function clearField() {
    guess = document.querySelector('input');
    guess.value = '';
}

function newGame() {
    secretNumber = genterateRandomNumber();
    clearField();
    attempts = 1;
    initialMessage();
    document.getElementById('new_game').setAttribute('disabled', true);
}
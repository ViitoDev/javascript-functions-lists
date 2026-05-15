# Guess the Number

A small browser game where the player tries to guess a secret number between **1 and 10**. The game tracks how many attempts it took and prevents the same number from being drawn twice in a row until the full range has been used.

Built as part of the Alura course **"Lógica de programação: explore funções e listas"**, using only HTML, CSS and vanilla JavaScript.

## Features

- Random secret number between 1 and 10
- Hints when the guess is too high or too low
- Attempt counter with correct singular/plural wording
- "New game" button enabled only after a win
- No number repeats until every option has been drawn

## Tech stack

- HTML5
- CSS3 (custom styles, Inter and JetBrains Mono fonts)
- JavaScript (ES6, no frameworks)

## Project structure

```
principal-project/
├── app.js        # Game logic
├── index.html    # Markup
├── style.css     # Styles
└── img/          # Assets
```

## Running locally

Just open `principal-project/index.html` in any modern browser — no build step or dependencies required.

```bash
git clone https://github.com/<your-user>/<this-repo>.git
cd <this-repo>/principal-project
xdg-open index.html   # or just double-click the file
```

## How it works

The core flow lives in [principal-project/app.js](principal-project/app.js):

- `genterateRandomNumber()` picks a value in range and keeps a list of already-used numbers so it doesn't repeat.
- `verifyGuess()` reads the input, compares it with the secret number and updates the UI.
- `newGame()` resets state and re-enables the form for another round.

## Author

Developed by **João Victor** during the Alura logic & JavaScript track.

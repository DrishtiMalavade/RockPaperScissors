document.addEventListener('DOMContentLoaded', function () {
    const choices = ['rock', 'paper', 'scissors'];

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, compChoice) {
        if (userChoice === compChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function updateResult(userChoice, compChoice) {
        const resultElement = document.getElementById('result');
        const userChoiceElement = document.getElementById('user-choice');
        const compChoiceElement = document.getElementById('computer-choice');

        userChoiceElement.textContent = userChoice;
        compChoiceElement.textContent = compChoice;

        const result = determineWinner(userChoice, compChoice);
        resultElement.textContent = result;
    }

    function playGame(userChoice) {
        const compChoice = computerChoice();
        updateResult(userChoice, compChoice);
    }

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            playGame(button.id);
        });
    });
});

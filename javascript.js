const options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('input');

function disableButtons() {
    buttons.forEach(element => {
        element.disabled = true
    })
}

function getCompChoice(){
    let compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}

function playRound(playerChoice) {
    let compChoice = getCompChoice();
    let result = '';
    if (playerChoice == compChoice) {
        result = (`It's a tie. You and the Computer both chose ${playerChoice}.` + 
        `<br><br>You: ${playerScore}, Computer: ${compScore}`);
        
    } else if (
        (playerChoice == 'Rock' && compChoice == 'Scissors') ||
        (playerChoice == 'Scissors' && compChoice == 'Paper') ||
        (playerChoice == 'Paper' && compChoice == 'Rock')
    ) {
        playerScore++;
        result = (`You win! ${playerChoice} beats ${compChoice}!` +
        `<br><br> You: ${playerScore}, Computer: ${compScore}`);
        if (playerScore == 5) {
            result += `<br><br>You won the game!`;
            disableButtons();
        }
    } else {
        compScore++;
        result = (`You lose! ${compChoice} beats ${playerChoice}!` +
        `<br><br> You: ${playerScore}, Computer: ${compScore}`);
        if (compScore == 5) {
            result += `<br><br>You lost the game...`;
            disableButtons();
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
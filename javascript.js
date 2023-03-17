const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;


function getCompChoice(){
    let compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}

function playRound(playerChoice, compChoice) {
    console.log(`You chose '${playerChoice}'`);
    console.log(`Computer chose '${compChoice}'`);
    if (playerChoice == compChoice) {
        return 'It\'s a tie';
    }
    else if (
        (playerChoice == 'rock' && compChoice == 'scissors') ||
        (playerChoice == 'scissors' && compChoice == 'paper') ||
        (playerChoice == 'paper' && compChoice == 'rock')
    ) {
        playerScore++;
        return `You win!`;
    }
    else {
        compScore++;
        return 'You lose!';
    }
}

function game() {
    console.log('Start game')
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Enter rock, paper or scissors');
        let compChoice = getCompChoice();
        console.log(playRound(playerChoice, compChoice));
        console.log(`You: '${playerScore}'`);
        console.log(`Computer: '${compScore}'`);
    }
    if (playerScore > compScore) {
        console.log('You won the game!');
    }
    else {
        console.log('You lost the game...')
    }
}

game();
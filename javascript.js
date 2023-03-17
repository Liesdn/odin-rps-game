const options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;
let gameNo = 1;


function getCompChoice(){
    let compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}

function getPlayerChoice() {
    let validChoice = false;
    while (validChoice == false) {
        let choice = prompt('Enter rock, paper or scissors');
        if (choice == null) {
            continue;
        }
        let choiceCap = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase() 
        if (options.includes(choiceCap)) {
            validChoice = true;
            return choiceCap;
        }
    }

}

function playRound(playerChoice, compChoice) {
    console.log(`You chose '${playerChoice}'`);
    console.log(`Computer chose '${compChoice}'`);
    if (playerChoice == compChoice) {
        return 'It\'s a tie';
    }
    else if (
        (playerChoice == 'Rock' && compChoice == 'Scissors') ||
        (playerChoice == 'Scissors' && compChoice == 'Paper') ||
        (playerChoice == 'Paper' && compChoice == 'Rock')
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
        let playerChoice = getPlayerChoice();
        let compChoice = getCompChoice();
        console.log(`Game N° '${gameNo}'`)
        console.log(playRound(playerChoice, compChoice));
        console.log(`You: '${playerScore}'`);
        console.log(`Computer: '${compScore}'`);
        gameNo++;
    }
    if (playerScore == compScore) {
        console.log('Tie!');
    }
    else if (playerScore > compScore) {
        console.log('You won the game!');
    }
    else {
        console.log('You lost the game...')
    }
}

game();
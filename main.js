const images = Array.from(document.querySelectorAll('.cardimg'));
const image = document.querySelectorAll('.image');
const options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;

const modalW = document.getElementById("modalW");
const modalL = document.getElementById("modalL");

function openModalW() {
    modalW.style.display = 'block';
}

function openModalL() {
    modalL.style.display = 'block';
}

// The buttons are of a previous and simpler version of the game, i keep these as comments for reference
// const buttons = document.querySelectorAll('input');

// function disableButtons() {
//     buttons.forEach(element => {
//         element.disabled = true
//     })
// }

function getCompChoice(){
    let compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}

function playRound(playerChoice) {
    let compChoice = getCompChoice();
    let result = '';
    if (playerChoice == compChoice) {
        result = (`It's a tie. Rohan and the kid both chose ${playerChoice}.` + 
        `<br><br>Score
        <br>Rohan: ${playerScore}, kid: ${compScore}`);
        
    } else if (
        (playerChoice == 'Rock' && compChoice == 'Scissors') ||
        (playerChoice == 'Scissors' && compChoice == 'Paper') ||
        (playerChoice == 'Paper' && compChoice == 'Rock')
    ) {
        playerScore++;
        result = (`Rohan wins! ${playerChoice} beats ${compChoice}!` +
        `<br><br>Score
        <br>Rohan: ${playerScore}, kid: ${compScore}`);
        if (playerScore == 5) {
            openModalW();
            //result += `<br><br>You won the game!`;
            // disableButtons();
        }
    } else {
        compScore++;
        result = (`Rohan loses! ${compChoice} beats ${playerChoice}!` +
        `<br><br>Score
        <br>Rohan: ${playerScore}, kid: ${compScore}`);
        if (compScore == 5) {
            openModalL();
            //result += `<br><br>You lost the game...`;
            // disableButtons();
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

images.forEach(image =>{
   image.addEventListener('click', function(){
        playRound(image.id)
    })
})

//buttons.forEach(button =>{
//    button.addEventListener('click', function(){
//         playRound(button.value)
//    })
//})

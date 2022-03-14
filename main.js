/* 
Understand the problem
Write a program that takes an input from a user of either rock, paper, or scissors, and plays 5 rounds of rock paper scissors with a computer. After every round, the winner is declared and a point is added to the winner

- Does program have a UI? What will it look like? What functionality will the interface have? Sketch this out on paper
    No UI.
- What are the inputs? Will the user enter data or will you get input from somewhere else?
    User has to enter data when prompted, 'Rock', 'Paper', or 'Scissors'
- What’s the desired output?
    A string that declares who the winner is, and a point added to the winner
- **Given input X, what are the steps necessary to return output Y? -** this is the pseudocode
*/

/* 
Declare a function called computerPlay that will randomly return 'Rock, 'Paper' or 'Scissors'
Within computerPlay, create a constant variable that stores the values 'Rock', 'Paper' or 'Scissors'
Randomly return 'Rock', 'Paper', or 'Scissors'
*/

let computerScore = 0;
let playerScore = 0;

function game () {
    for (let i = 0; i < 5; i++) {
        let computerPlay = function () {
            const options = ['rock', 'paper', 'scissors'];
            return options[Math.floor(Math.random() * options.length)];
            //That's why you need to multiply it by your options.length which is 3. This way your random number will be between 0 and 3 and when you round down with math floor it will be 0, 1 or 2, which are your array indexes.
        }

        let computerSelection = computerPlay();

        function playerPlay () {
            playerSelection = prompt('Rock, Paper, or Scissors?');
            playerSelection = playerSelection.toLowerCase();
            return playerSelection;
        }

        playerSelection = playerPlay();
        
        let playRound = function (playerSelection, computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('You lose! Paper beats Rock');
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('You win! Rock beats Scissors');
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert (' You win! Paper beats Rock');
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('You lose. Scissors beats paper');
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                computerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('You lose. Rock beats Scissors');
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                playerScore += 1;
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('You win! Scissors beats Paper');
            } else if (playerSelection === computerSelection) {
                console.log (`Your score is ${playerScore} and the computer's score is ${computerScore}`);
                alert ('It\'s a draw!');
            }
        }

        playRound (playerSelection, computerSelection);
     }
}

game ();

(playerScore > computerScore) ? alert(`Congratulations, you beat the computer. Your score:${playerScore}. Computer's Score:${computerScore}`) : alert (`Boohoo, you lost to the computer. Your score:${playerScore}. Computer's Score:${computerScore}`);
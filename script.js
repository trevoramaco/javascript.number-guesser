let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanDifference = Math.abs(target - humanGuess);
    let computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
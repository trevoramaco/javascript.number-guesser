let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// Compare which guess is closer to the target
const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanDifference = Math.abs(target - humanGuess);
    let computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

// Update global score of whoever won
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

// Advance global round counter
const advanceRound = () => currentRoundNumber++;
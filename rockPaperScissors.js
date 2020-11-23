const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return UserInput;
  } else {
    console.log('error!');
  }
}
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
}}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'game was a tie.';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return console.log('computer has won!');
      } else {
        return console.log('user has won!');
      }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!'
        } else {
          return 'The user has won!'
        }
    } else {
      if (computerChoice === 'scissors') {
        return 'Computer has won!';
      } else {
        return 'User has won!';
      }
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`You threw: ${computerChoice}`);
};

playGame();





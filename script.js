
function getComputerChoice() {
    let choices=['Rock','Scissors','Paper'];
    let computerChoice=choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    return computerChoice;
  }

  function getResult(playerChoice, computerChoice) {
    let score;
    // return the result of score based on if you won, drew, or lost
    if(playerChoice == computerChoice){
      score = 0;
    }
    else if ( playerChoice == 'Rock' && computerChoice == 'Scissors'){
      score = 1;
    }
    else if ( playerChoice == 'Paper' && computerChoice == 'Rock'){
      score = 1;
    }
    else if ( playerChoice == 'Scissors' && computerChoice == 'Paper'){
      score = 1;
    }
  
    else{
      score = -1;
    }
  
    return score;
  }
    

  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {

    let result= document.getElementById('result')
    switch(score){
      case 1:
        result.innerText=`You Win`
        break;
      case 0:
        result.innerText=`Draw`
        break;
      case -1:
        result.innerText=`You Lose`
        break;
    }
      let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value ,computerChoice)
    
  }
  
  function playGame() {
 
    let rpsButtons = document.querySelectorAll('.rpsButton')
    
  
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })
   
  
   
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
    let playerScore = document.getElementById("player-score")
      let hands = document.getElementById('hands')
      let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
  }
  
  playGame()
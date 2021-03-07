let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getComputerChoice() {
    const choices = ['R','P','S'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "P") return "Paper";
    return "Scissors";
}

function Win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize (3) .sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord (computerChoice)} ${smallCompWord}. YaaY You won!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') }, 500);

}

function Lose (userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize (3) .sub();
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} loses to ${convertToWord (computerChoice)} ${smallCompWord}. Oh Oh You lost`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}

function Draw (userChoice,computerChoice) { 
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize (3) .sub();
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} equals ${convertToWord (computerChoice)} ${smallCompWord}. Its a draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow') }, 500);
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "RS":
    case "PR":
    case "SP":
        Win(userChoice, computerChoice);
        break;
    case "RP":
    case "PS":
    case "SR":
        Lose(userChoice, computerChoice);
        break;
    case "RR":
    case "SS":
    case "PP":
        Draw(userChoice,computerChoice);
        break;
    
}
}

function main () { 

 rock_div.addEventListener('click',function() {
    game("R");
 })

 paper_div.addEventListener('click',function() {
    game("P");
 })

 scissors_div.addEventListener('click',function() {
    game("S");
 })

}
main();

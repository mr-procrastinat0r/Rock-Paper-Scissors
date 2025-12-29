function getComputerChoice(){// function to get computer choice
	let n = Math.floor(Math.random() * 3) + 1;
	let choice = 0;
	if(n === 1){
		choice = "rock";
	}	
	else if(n === 2){
		choice = "paper";
	}
	else if(n === 3){
		choice = "scissors";
	}
	return choice;
}

const playGame = ()=> {

	let humanScore = 0;
	let computerScore = 0;

const output = document.querySelector("#result");
const hscore = document.querySelector("#Hscore");
const cscore = document.querySelector("#Cscore");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function callRock(){
		const humanselection = 'rock';
		const computerselection = getComputerChoice();
		playRound(humanselection, computerselection);
	}
rock.addEventListener("click", callRock);

function callPaper(){
		playRound("paper", getComputerChoice());
	}
paper.addEventListener("click", callPaper);

function callScissors(){
		playRound("scissors", getComputerChoice());
	}
scissors.addEventListener("click" , callScissors);

function stopGame(){
		rock.removeEventListener("click", callRock);
		paper.removeEventListener("click", callPaper);
		scissors.removeEventListener("click", callScissors);
	}

//function to play round
	function playRound(humanChoice, computerChoice){
//comparing the results we get from the choice functions
	if(humanChoice === "rock" && computerChoice === "paper"){
		output.textContent = "You lose!Paper beats Rock";
		computerScore++;
	}
	else if(humanChoice === "paper" && computerChoice === "rock"){
		output.textContent = "You win!Paper beats Rock";
		humanScore++;
	}
	else if(humanChoice === "rock" && computerChoice === "scissors"){
		output.textContent = "You win!Rock beats scissors";
		humanScore++;
	}
	else if(humanChoice === "paper" && computerChoice === "scissors"){
		output.textContent = "You lose!Scissors beats paper";
		computerScore++;
	}
	else if(humanChoice === "scissors" && computerChoice === "paper"){
		output.textContent = "You win!Scissors beats paper";
		humanScore++;
	}
	else if(humanChoice ==="scissors" && computerChoice === "rock"){
		output.textContent = "You lose!Rock beats scissors";
		computerScore++;
	}
	else if(humanChoice === "rock" && computerChoice === "rock"){
		output.textContent = "Tie";
	}
	else if(humanChoice === "paper" && computerChoice === "paper"){
		output.textContent = "Tie";
	}
	else if(humanChoice === "scissors" && computerChoice ==="scissors"){
		output.textContent = "Tie";
	}

	hscore.textContent = humanScore;
	cscore.textContent = computerScore;


	if(humanScore === 5){
		output.textContent = "You have won!";
		stopGame();
		return;
		}
	else if(computerScore === 5){
		output.textContent = "Computer Wins!";
		stopGame();
			return;
		}
}	
};

playGame();


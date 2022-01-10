//JS Document
var width = 0;
// Each of the next 5 functions are identical in logic; there is one function for every user option; rock, paper, scissors, lizard, spock.
function chooseRock(){
		// When Rock is chosen, the user choice is displayed on screen as well as a "VS" sign.
		document.getElementById("playerPicks").innerHTML = '<img src="../_images/newrock4.png">';
		document.getElementById("showResult").innerHTML = "VS";
		// This variable is set to equal the function computerChoice() because otherwise it would run every time the function is mentioned.
		var computerChose = computerChoice();
		// The function checks to see if the computer choice equals rock. If not, it checks for paper, then scissors, and so on.
		if (computerChose == "rock"){
			// When the computer choice is identified, an HTML text element updates to say what the result of the match is.
			return document.getElementById("result").innerHTML = "It's a tie!";
		}
		else if (computerChose == "paper"){
			// An example of how this function works: The user choice is rock (because we are running "chooseRock()"), and the computer chose paper. Paper beats rock, so the computer wins and the user loses. Therefore, a message is displayed on screen saying "You lose!".
			return document.getElementById("result").innerHTML = "You lose!";
		}
		else if (computerChose == "scissors"){
			return document.getElementById("result").innerHTML = "You win!";
		}	
		else if (computerChose == "lizard"){
			return document.getElementById("result").innerHTML = "You win!";
		}
		else if (computerChose == "spock"){
			return document.getElementById("result").innerHTML = "You lose!";
		}
}
// Each of the next 5 functions are identical in logic; there is one function for every user option; rock, paper, scissors, lizard, spock.
function choosePaper(){
	// When Paper is chosen, the user choice is displayed on screen as well as a "VS" sign.
	document.getElementById("playerPicks").innerHTML = '<img src="../_images/newpaper3.png">';
	document.getElementById("showResult").innerHTML = "VS";
	// This variable is set to equal the function computerChoice() because otherwise it would run every time the function is mentioned.
	var computerChose = computerChoice();
	// The function checks to see if the computer choice equals rock. If not, it checks for paper, then scissors, and so on.
	if (computerChose == "rock"){
		// When the computer choice is identified, an HTML text element updates to say what the result of the match is.
		return document.getElementById("result").innerHTML = "You win!";
	}
	else if (computerChose == "paper"){
		// An example of how this function works: The user choice is paper (because we are running "choosePaper()"), and the computer also chose paper. Paper vs Paper is a tie. Therefore, a message is displayed on screen saying "You tie!".
		return document.getElementById("result").innerHTML = "It's a tie!";
	}
	else if (computerChose == "scissors"){
		return document.getElementById("result").innerHTML = "You lose!";
	}	
	else if (computerChose == "lizard"){
		return document.getElementById("result").innerHTML = "You lose!";
	}
	else if (computerChose == "spock"){
		return document.getElementById("result").innerHTML = "You win!";
	}
}
// Each of the next 5 functions are identical in logic; there is one function for every user option; rock, paper, scissors, lizard, spock.
function chooseScissors(){
	// When Scissors is chosen, the user choice is displayed on screen as well as a "VS" sign.
	document.getElementById("playerPicks").innerHTML = '<img src="../_images/newscissors3.png">';
	document.getElementById("showResult").innerHTML = "VS";
	// This variable is set to equal the function computerChoice() because otherwise it would run every time the function is mentioned.
	var computerChose = computerChoice();
	// The function checks to see if the computer choice equals rock. If not, it checks for paper, then scissors, and so on.
	if (computerChose == "rock"){
		// When the computer choice is identified, an HTML text element updates to say what the result of the match is.
		return document.getElementById("result").innerHTML = "You lose!";
	}
	else if (computerChose == "paper"){
		// An example of how this function works: The user choice is scissors (because we are running "chooseScissors()"), and the computer chose paper. Scissors beats paper, so the user wins and the computer loses. Therefore, a message is displayed on screen saying "You win!".
		return document.getElementById("result").innerHTML = "You win!";
	}
	else if (computerChose == "scissors"){
		return document.getElementById("result").innerHTML = "It's a tie!";
	}	
	else if (computerChose == "lizard"){
		return document.getElementById("result").innerHTML = "You win!";
	}
	else if (computerChose == "spock"){
		return document.getElementById("result").innerHTML = "You lose!";
	}
}
// Each of the next 5 functions are identical in logic; there is one function for every user option; rock, paper, scissors, lizard, spock.
function chooseLizard(){
	// When Lizard is chosen, the user choice is displayed on screen as well as a "VS" sign.
	document.getElementById("playerPicks").innerHTML = '<img src="../_images/newlizard3.png">';
	document.getElementById("showResult").innerHTML = "VS";
	// This variable is set to equal the function computerChoice() because otherwise it would run every time the function is mentioned.
	var computerChose = computerChoice();
	// The function checks to see if the computer choice equals rock. If not, it checks for paper, then scissors, and so on.
	if (computerChose == "rock"){
		// When the computer choice is identified, an HTML text element updates to say what the result of the match is.
		return document.getElementById("result").innerHTML = "You lose!";
	}
	else if (computerChose == "paper"){
		// An example of how this function works: The user choice is lizard (because we are running "chooseLizard()"), and the computer chose paper. Lizard beats paper, so the user wins and the computer loses. Therefore, a message is displayed on screen saying "You win!".
		return document.getElementById("result").innerHTML = "You win!";
	}
	else if (computerChose == "scissors"){
		return document.getElementById("result").innerHTML = "You lose!";
	}	
	else if (computerChose == "lizard"){
		return document.getElementById("result").innerHTML = "It's a tie!";
	}
	else if (computerChose == "spock"){
		return document.getElementById("result").innerHTML = "You win!";
	}
}
// Each of the next 5 functions are identical in logic; there is one function for every user option; rock, paper, scissors, lizard, spock.
function chooseSpock(){
	// When Spock is chosen, the user choice is displayed on screen as well as a "VS" sign.
	document.getElementById("playerPicks").innerHTML = '<img src="../_images/newspock3.png">';
	document.getElementById("showResult").innerHTML = "VS";
	// This variable is set to equal the function computerChoice() because otherwise it would run every time the function is mentioned.
	var computerChose = computerChoice();
	// The function checks to see if the computer choice equals rock. If not, it checks for paper, then scissors, and so on.
	if (computerChose == "rock"){
		// When the computer choice is identified, an HTML text element updates to say what the result of the match is.
		return document.getElementById("result").innerHTML = "You win!";
	}
	else if (computerChose == "paper"){
		// An example of how this function works: The user choice is spock (because we are running "chooseSpock()"), and the computer chose paper. Paper beats spock, so the computer wins and the user loses. Therefore, a message is displayed on screen saying "You lose!".
		return document.getElementById("result").innerHTML = "You lose!";
	}
	else if (computerChose == "scissors"){
		return document.getElementById("result").innerHTML = "You win!";
	}	
	else if (computerChose == "lizard"){
		return document.getElementById("result").innerHTML = "You lose!";
	}
	else if (computerChose == "spock"){
		return document.getElementById("result").innerHTML = "It's a tie!";
	}
}
// This is the function referenced in the "chooseX()" functions that "makes the computer choice".
function computerChoice() {
	// Variable randNum is set to a random between 0 and 4. "Math.floor" rounds that number down to the nearest integer.
	var randNum = Math.floor(Math.random()*5);
	// The function now checks each number between 0 and 4 until it identifies what number the computer chose.
	if (randNum == 0){
		// Once the if statement is made true (meaning that's the number the computer chose), the computerPicks ID is updated with a picture to show the user what the computer chose. Each number between 0-4 represents a different choice.
		document.getElementById("computerPicks").innerHTML = '<img src="../_images/newrock4.png">';
		// Return "rock", return "paper", etc., allows me to identify what the computer chose in my "chooseX()" functions.
		return "rock";
	}
	else if (randNum == 1){
		document.getElementById("computerPicks").innerHTML = '<img src="../_images/newpaper3.png">';
		return "paper";
	}
	else if (randNum == 2){
		document.getElementById("computerPicks").innerHTML = '<img src="../_images/newscissors3.png">';
		return "scissors";
	}
	else if (randNum == 3){
		document.getElementById("computerPicks").innerHTML = '<img src="../_images/newlizard3.png">';
		return "lizard";
	}
	else if (randNum == 4){
		document.getElementById("computerPicks").innerHTML = '<img src="../_images/newspock3.png">';
		return "spock";
	}
}
// This is the function that is ran onLoad. It creates the grey bar used as the win streak counter.
function loadStreak() {
	// This variable is set to progress so I don't have to type out "document.getElementById("progress")" in lines 165-167.
	var progress = document.getElementById("progress");
	// Makes the win streak bar grey to represent 0 wins in a row.
	progress.style.backgroundColor = "grey";
	// The width is set to 100% to take up 100% of the space in the progress div.
	progress.style.width = "100%";
	progress.innerHTML = "Win Streak: 0";
}
function progressBar() {
	// This variable is set to progress so I don't have to type out "document.getElementById("progress")" in lines 165-167.
	var progress = document.getElementById("progress");
		// This is the if statement that sets the win streak back to 0 once the user hits 5 in a row.
	if (progress.innerHTML === "Win Streak: 5") {
		width = 0;
		// Congratulates the user for winning 5 times in a row.
		alert("Good job on beating the champ! Can you do it again?");
		// Runs function loadStreak() that resets the entire bar.
		loadStreak();
	}	
	// This adds 20% to the progress bar every time you win.
	if (document.getElementById("result").innerHTML === "You win!") {
		width += 20;
		progress.style.backgroundColor = "green";
		progress.style.width = width + '%';
		// Sets the text in the progress bar to be the value of width divided by 20. Example: width = 80 would make "Win Streak: 4".
		progress.innerHTML = "Win Streak: " + width / 20;
	}
	// This resets the progress bar back to 0 every time the user does not win (ties or loses).
	else{
		width = 0;
		progress.style.width = width + '%'; 
		progress.style.backgroundColor = "grey";
		progress.style.width = "100%";
		progress.innerHTML = "Win Streak: 0";
	}
}		

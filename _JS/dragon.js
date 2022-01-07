// These variables are defined so I can display whichever character's picture is chosen in the instructions page simply by using the one word variable instead of the relative links.
var eggsy = '<img src="../_images/char1.png">';
var santiago = '<img src="../_images/char2.png">';
var hans = '<img src="../_images/char3.png">';
var i = 0;
var text;
var sprite;
var gameIcon;
var gameWalls = [];
// This object is used to store all the statistics of the player; things such as name, class, lives, and more. The three bottom properties of the object are used to represent the special ability of the character, and if it applies to the user, will be set to 1.
var hero = {
		name: "",
		class: "",
		level: 1,
		lives: 3,
		score: 0,
		time: 30,
		pause: 0,
		break: 0,
		invis: 0,	
};
// Credit to W3 Schools for concept of this game and several mechanics such as the game stopping when the component runs into a wall.
var gameCanvas = {
    canvas: document.createElement("canvas"),
	// This method (which is a function stored as the value of a property) first sets the width and height of gameCanvas.canvas.
    start: function() {
			this.canvas.width = 480;
			this.canvas.height = 270;
			// Next, the canvas is inserted as the first HTML element of <div id="game">.
			document.getElementById("game").insertBefore(this.canvas, document.getElementById("game").childNodes[0]);
			// These following lines are crucial to animating the canvas.
			this.context = this.canvas.getContext("2d");
			this.frameNo = 0;
			// Runs updatesGaveCanvas() 50 times per second.
			this.interval = setInterval(updateGameCanvas, 20);
    },
	// Clears the entire canvas every frame so icon and walls don't draw continuously.
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
	// Stops the timer set in setInterval (used when game should stop).
    stop: function() {
        clearInterval(this.interval);
    }
}
// This function I can run onLoad to skip the backstory if needed for debugging purposes.
function deBug() {
	document.getElementById("messaging").style.display = "none"; 
	document.getElementById("instructions").style.display = "none"; 
	document.getElementById("game").style.display = "inline";
	runGame();
}
// This is the function that makes the typewriter animation.
function typeWriter(text, id, i) {
	if (i < text.length) {
		// As long as i (set to 0 everytime function is run) is still less than the length in characters of the text, display one more letter of the message.
    	document.getElementById(id).innerHTML += text.charAt(i);
		i++;
		// Wait 40 miliseconds then run the function again.
		setTimeout(function(){ typeWriter(text, id, i); }, 40);
  }
}
// This function always runs 1 second after onLoad and writes out the first message.
function message1() {
	setTimeout(function(){ typeWriter("HELLO? IS ANYBODY GETTING MY MESSAGES?", "message1", 0); }, 1000);
}
// This function is set to run when the first form (the one that responds to if the user is getting the messages) is submitted.
function userResponded1() {
	setTimeout(function(){ typeWriter("Finally. I've been trying to establish connection with someone for days. I need your help, but I don't have much time to explain. What's your name?", "message2", 0); }, 500);
	// This "autofocuses" the next text box to continue to simulate the "command prompt" style.
	document.getElementById("response2").focus();
}
// All of the userRespondedX functions are simply run whenever the user presses enter on that corresponding text submition.
function userResponded2() {
	// Stores the user's name inside the hero object in case I need to use that information later on.
	hero.name = document.getElementById("response2").value; 
	setTimeout(function(){ typeWriter("Thank you, " + hero.name + ". You're my hero.", "message3Pt1", 0); }, 500);
	setTimeout(function(){ typeWriter("Now for the task. I've been stuck in this huge, all black room for what I think has been weeks. I don't remember anything. For some reason, the only thing I know anything about is this game that someone needs to beat for me to get out. Do you think you can help?", "message3Pt2", 0); }, 2500);
	document.getElementById("response3").focus();
	
}
function userResponded3() {
	var response3 = document.getElementById("response3").value.toLowerCase();
	// This checks to see if response3 (user's answer to "Do you think you can help") is equal to any of the following string values that mean something along the lines of "yes".
	if (response3 == "yes" || response3 == "yeah" || response3 == "yup" || response3 == "i guess" ||response3 == "i guess so" || response3 == "ye" || response3 == "sure" || response3 == "aye aye" || response3 == "fo' shizzle" || response3 == "yessir" || response3 == "yah" || response3 == "ya" || response3 == "yeet" || response3 == "ya yeet" || response3 == "ya yeet ya") {
			setTimeout(function(){ typeWriter("Perfect. The padlock on the door requires 3 two-digit numbers. Make sure to remember each code you recieve at the end of the level. Once you've finished, you can tell the codes to me.", "message4Pt1", 0); }, 500);
			setTimeout(function(){ typeWriter("My fate is now in your hands.", "message4Pt2", 0); }, 8500);
			setTimeout(function(){ 
					document.getElementById("messaging").style.display = "none"; 
					document.getElementById("classSelector").style.display = "inline";
			}, 13000);
			document.getElementById("responseDummy").focus();
	}
	else {
		// Refocuses the same text input element if the form submission is not equal to "yes" or an equivalent.
		document.getElementById("response3").focus();
	}
}
// All of the next 3 functions do the exact same thing; there is just one for each character that can be chosen.
function choseEggsy() {
	hero.class = "Eggsy";
	hero.pause = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = eggsy;
	setTimeout(function(){ typeWriter("You have chosen Eggsy. Good idea.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("Dr. Eggsy Hughes was born in Essex, England on April 1, 1924. He may be born on April Fools, but he is no joke.", "instruct2", 0); }, 2500);
	setTimeout(function(){ typeWriter("For years he has been researching the time shifting properties of the extremely unstable isotope of Hydrogen named Deuterium.", "instruct3", 0); }, 7500);
	setTimeout(function(){ typeWriter("With the Deuterium orb in his pocket, he can stop time once per round. To use this special ability, press F while in game.", "instruct4", 0); }, 13000);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Eggsy.", "instruct5", 0); }, 18250);
	document.getElementById("userStarts").focus();
}
// The functions begin by changing a couple values of the hero object, and then change the HTML elements currently displayed.
function choseSantiago() {
	hero.class = "Santiago";
	hero.invis = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = santiago;
	setTimeout(function(){ typeWriter("Santiago, huh?. Nice choice.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("Santiago Amador, son of famous magician Ivan Amador, grew up in a rual area of southern Spain. Learning from his father, Santiago became a prodigy of magic. Santiago mesmerized crowds of thousands before he even started kindergarten.", "instruct2", 0); }, 2000);
	setTimeout(function(){ typeWriter("His most famous trick of all, of course, was his teleporting rabit trick.", "instruct3", 0); }, 12000);
	setTimeout(function(){ typeWriter("Through years of practice, Santiago learned to teleport himself. Use this secret ability once per round to teleport anywhere on the screen with ease by pressing F.", "instruct4", 0); }, 15750);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Santiago.", "instruct5", 0); }, 23500);
	document.getElementById("userStarts").focus();
}
// The main part of these functions give backstory to the characters and prompt the user to type "enter" when ready to play.
function choseHans() {
	hero.class = "Hans";
	hero.break = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = hans;
	setTimeout(function(){ typeWriter("You have chosen Hans. Good choice.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("As one of the last people to still practice this age old tradition, Hans Kramer can transport cattle simply by lifting them up and putting them on his back.", "instruct2", 0); }, 2000);
	setTimeout(function(){ typeWriter("The Kramer family tree has a large line of men so strong that they can carry eight cattle from their family ranch to the butcher shop in downtown Heidelberg, Germany each hour.", "instruct3", 0); }, 9750);
	setTimeout(function(){ typeWriter("At 7' 5\" and 400lbs, anatomists around the world have no clue how Hans and his family members are so massive. To use Hans' superstrength, press F and break through one of the walls.", "instruct4", 0); }, 18000);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Hans.", "instruct5", 0); }, 26500);
	document.getElementById("userStarts").focus();
}
// When the form for "typing start to begin" is submitted, this function is run that first checks to see if the response = "start".
function userStarts() {
	if (document.getElementById("userStarts").value.toLowerCase() == "start") {
		// If the condition is satisfied, the instruction visual elements are hidden and the game elements are shown.
		document.getElementById("instructions").style.display = "none"; 
		document.getElementById("game").style.display = "inline";
		runGame();
	}
}
function runGame() {
	// Stats displayed.
	document.getElementById("levelNum").innerHTML = "Level " + hero.level;
	document.getElementById("lives").innerHTML = "Lives: " + hero.lives;
	document.getElementById("score").innerHTML = "Score: " + hero.score;
	document.getElementById("time").innerHTML = "Time Left till win: " + hero.time;
	// This method is evoked in the runGame() function. See the global variables listed at the top of file for a breakdown of the gameCanvas object and its properties.
	gameCanvas.start();
	// Calls the component function to create the visual representation of the player. Width, height, color, and positions are set in the arguments.
    gameIcon = new component(10, 13, "#08cb08", 10, 120);
	// This allows the user to move the component using WASD keys. When any key is pressed while on the document, the following function is ran.
	document.onkeypress = function(event) {
		// The first step of the function is to check if the key pressed is W, A, S, or D. It first checks if the key pressed is W. keyCode 119 = w. If not, the same thing is checked for A, S, and D.
		if (event.keyCode == 119) {
			// If the keyCode of the key pressed is indeed W, then the corresponding function to move the component is evoked.
			moveUp();
		// keyCode 115 = S
		} else if (event.keyCode == 115) {
			moveDown();
		// keyCode 97 = A
		} else if (event.keyCode == 97) {
			moveLeft();
		// keyCode 100 = D
		} else if (event.keyCode == 100) {
			moveRight();
		}
	}
	// Runs timeKeeper() once a second.
	setInterval(timeKeeper, 1000);
}
// Function that creates the component.
function component(width, height, color, xPos, yPos) {
    this.width = width;
    this.height = height;
	// These two properties are the values used to determine the speed of the component in both the x and y direction.
    this.speedX = 0;
    this.speedY = 0;    
    this.xPos = xPos;
    this.yPos = yPos;    
	// This uses the arguments of the component function to create a component with the currently specified size, position, and color.
    this.update = function() {
        context = gameCanvas.context;
        context.fillStyle = color;
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
	// This function is run every time the frame updates (50 times per second) and simulates "speed" by settings the X and Y positions of the component to be the current values + the "speed" (which will be changed in the moveX() functions at bottom of page)
    this.newPos = function() {
        this.xPos += this.speedX;
        this.yPos += this.speedY;  
    }    
	// The "myX" variables are representing values of the user's icon, and the "otherX" variables are representing values of the gameWall that has been plugged in as the argument.
    this.crashWith = function(otherobj) {
        var myleft = this.xPos;
        var myright = this.xPos + (this.width);
        var mytop = this.yPos;
        var mybottom = this.yPos + (this.height);
        var otherleft = otherobj.xPos;
        var otherright = otherobj.xPos + (otherobj.width);
        var othertop = otherobj.yPos;
        var otherbottom = otherobj.yPos + (otherobj.height);
        var crash = true;
		// The values of the component and the values of the icon are compared to determine whether or not they have run into each other.
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
function updateGameCanvas() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
	// Because there are multiple gameWalls, this loop is used to go through every gameWall and check if it there has been a crash.
    for (i = 0; i < gameWalls.length; i += 1) {
        if (gameIcon.crashWith(gameWalls[i])) {
			// If any of them have crashed, the game stops.
            gameCanvas.stop();
			// Restarts the game and walls, subtracts a life, and resets time and score.
			gameWalls = [];
			hero.lives -= 1;
			clearInterval(timeKeeper());
			hero.time = 30;
			hero.score = 0;
			runGame();
            return;
        } 
    }
	// Runs clear() method.
    gameCanvas.clear();
	// Adds 1 to the frame counter.
    gameCanvas.frameNo += 1;
    if (gameCanvas.frameNo == 1 || everyinterval(150)) {
        xPos = gameCanvas.canvas.width;
        minHeight = 20;
        maxHeight = 200;
		// This randomly generates a number using the given maximum and minimum height values to use for the new wall components.
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
		// This randomly generates a number using the given maximum and minimum gap values to use for the new wall components.
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
		// The first new component is the upper portion of a wall.
        gameWalls.push(new component(10, height, "green", xPos, 0)); 
		// The second new component is the lower portion of the wall, which uses the randomly generated "gap" variable to determine the height.
        gameWalls.push(new component(10, xPos - height - gap, "green", xPos, height + gap));
    }
    for (i = 0; i < gameWalls.length; i += 1) {
		// The x-axis position of each gameWall is decreased by one, moving it to the left.
        gameWalls[i].xPos += -1;
        gameWalls[i].update();
    }
    gameIcon.newPos();    
    gameIcon.update();
	// Updates the score to equal the current frame number.
	hero.score = gameCanvas.frameNo;
	document.getElementById("score").innerHTML = "Score: " + hero.score;
	// Conditional checks if the user has lost the game.
	if (hero.lives == 0) {
		// If true, the game stops and the verdict displays that the user has lost. The game is over.
		console.log(hero.score);
		gameCanvas.stop();
		console.log(hero.score);
		document.getElementById("game").style.display = "none";
		document.getElementById("messaging").style.display = "inline";
		document.getElementById("message1").innerHTML = "";
		document.getElementById("message2").innerHTML = "";
		document.getElementById("message3Pt1").innerHTML = "";
		document.getElementById("message3Pt2").innerHTML = "";
		document.getElementById("message4Pt1").innerHTML = "";
		document.getElementById("message4Pt2").innerHTML = "";
		setTimeout(function(){ typeWriter("Thank you for trying, but it's just too late now.", "message1", 0); }, 1000);
		setTimeout(function(){ typeWriter("Looks like I'll be stuck here forever.", "message2", 0); }, 3500);
		setTimeout(function(){ typeWriter("Good bye.", "message3Pt1", 0); }, 6500);
	}
	if (hero.time == 0) {
		// If true, the game stops and the messages display that the user has won. The game is over.
		gameCanvas.stop();
		document.getElementById("game").style.display = "none";
		document.getElementById("messaging").style.display = "inline";
		document.getElementById("message1").innerHTML = "";
		document.getElementById("message2").innerHTML = "";
		document.getElementById("message3Pt1").innerHTML = "";
		document.getElementById("message3Pt2").innerHTML = "";
		document.getElementById("message4Pt1").innerHTML = "";
		document.getElementById("message4Pt2").innerHTML = "";
		setTimeout(function(){ typeWriter("I am eternally grateful for getting those codes for me.", "message1", 0); }, 1000);
		setTimeout(function(){ typeWriter("I don't know how I could ever repay you.", "message2", 0); }, 3500);
		setTimeout(function(){ typeWriter("Thank you.", "message3Pt1", 0); }, 6500);
	}
}
// This function is used to create new walls. It returns true if the interval number (150 for when it is used in updateGameCanvas()) equals the current frame number.
function everyinterval(intervalNum) {
	// More specifically, this conditional actually checks to see if the remainder of the two numbers divided is equal to 0.
    if ((gameCanvas.frameNo / intervalNum) % 1 == 0) {return true;}
	else {return false;}
}
// Triggered when the W key is pressed, moveUp() sets speedY to -0.5 so it can change the value of yPos in the component function and move the component upward.
function moveUp() {
    gameIcon.speedY = -0.5; 
}
// Triggered when the S key is pressed, moveDown() sets speedY to 0.5 so it can change the value of yPos in the component function and move the component downward.
function moveDown() {
    gameIcon.speedY = 0.5; 
}
// Triggered when the A key is pressed, moveLeft() sets speedX to -0.5 so it can change the value of xPos in the component function and move the component leftward.
function moveLeft() {
    gameIcon.speedX = -0.5; 
}
// Triggered when the D key is pressed, moveRight() sets speedY to 0.5 so it can change the value of xPos in the component function and move the component rightward.
function moveRight() {
    gameIcon.speedX = 0.5; 
}
// Subtracts 1 from hero.time every time the function is run.
function timeKeeper() {
	hero.time -= 1;
	document.getElementById("time").innerHTML = "Time left till win: " + hero.time;
}
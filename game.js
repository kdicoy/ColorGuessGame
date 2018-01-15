
var headerColor = document.querySelector("h1");
var userChoice = document.querySelector("#choice");
var pickedColorHeader = document.querySelector("#picked_color");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



var colorsSize = 6;
var colors = generateRandomColors(colorsSize);
var pickedColor = pickColor();


init();

function init() {
	generateColorTable();
	setButtons();
	resetGameState();
}




//Generates the game
function generateColorTable() {
	pickedColorHeader.textContent = pickedColor;

	
	for (var i = 0; i < squares.length; i++) {
		
		if(colors[i]) {
		//add colors to the squares
		squares[i].style.display = "block";	
		squares[i].style.backgroundColor = colors[i];	
		}
		else {
		squares[i].style.display = "none";		
		}
	
		//add listeners to the squares
		squares[i].addEventListener("click", function() {
			
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			//compares if the chosen color matches the right color
			if(clickedColor === pickedColor) {
				userChoice.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				correctChoice();
			}
			else {
				this.style.backgroundColor = "#232323";			
				userChoice.textContent = "Try Again!";
			}
		});
	}

}



function setButtons() {
	
	//Button to reset the game to original state with new random colors
	resetButton.addEventListener("click", resetGameState); 

	//Buttons to toggle game modes: Easy, Medium, Hard
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			
			if(this.textContent === "EASY") {
				colorsSize = 3;
			} else if(this.textContent === "MEDIUM") {
				colorsSize = 6;
			} else {		
				colorsSize = 9;
			}
			
			resetGameState();
			
		});
		
	}
	
	
	
}


function resetGameState() {
	//generate new colors
	colors = generateRandomColors(colorsSize);
	//pick new random color array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	pickedColorHeader.textContent = pickColor();
	
	//initialize game tables
	generateColorTable();
	
	//switch header color and text back to original
	headerColor.style.backgroundColor = "steelblue";	
	resetButton.textContent = "NEW COLOR";
	userChoice.textContent = " ";
	
}


//Convert all squares and header to the correct color
function correctChoice() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	
	headerColor.style.backgroundColor = pickedColor;
	
}

//Choses a random color in the array of colors
function pickColor() {
	var ran = Math.floor(Math.random() * colors.length);
	
	return colors[ran]
}

//Generates the array for the random colors
function generateRandomColors(num) {
	var ranColors = [];
	
	//push random colors into the array
	for(var i = 0; i < num; i++) {
		ranColors.push(randomColor());	
	}
	
	return ranColors;
	
}

//Generates the random RGB color
function randomColor() {
	//pick a red (0 - 255)
	var red = Math.floor(Math.random() * 256)
	//pick a green(0 - 255)
	var green = Math.floor(Math.random() * 256)
	//pick a blue (0 - 255)
	var blue = Math.floor(Math.random() * 256)
	
	return stringBuilder(red, green, blue);
	
}

//Generate the RBG string
function stringBuilder(r, g, b) {
	var s = "rgb("
	s+= r + ", ";
	s+= g + ", ";
	s+= b + ")";
	
	return s;
}
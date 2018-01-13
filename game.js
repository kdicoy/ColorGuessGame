var colors = generateRandomColors(6);
	

var headerColor = document.querySelector("h1");
var userChoice = document.querySelector("#choice");
var pickedColorHeader = document.querySelector("#picked_color");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

//Converts the Color Header into the random color to be guessed
pickedColorHeader.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add colors to the squares
	squares[i].style.backgroundColor = colors[i];	
	
	//add listeners to the squares
	squares[i].addEventListener("click", function() {
		
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		//compares if the chosen color matches the right color
		if(clickedColor === pickedColor) {
			userChoice.textContent = "Correct!";
			correctChoice();
		}
		else {
			this.style.backgroundColor = "#232323";			
			userChoice.textContent = "Try Again!";
		}
	});
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
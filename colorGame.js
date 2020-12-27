var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDsiplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButton();
	setupSquares();
	reset();
}

function setupModeButton(){
	for(var i=0;i<modeButton.length;i++){
		modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
	    modeButton[1].classList.remove("selected");
	    this.classList.add("selected");
	    this.textContent === "Easy" ? numSquares=3:numSquares=6;
	       reset();
		});
    }
}

function setupSquares(){
	
   for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
	        var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDsiplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDsiplay.textContent = "Try Again";
			}
	    });
    }
}  

function reset(){
	colors = generateRandomColors(numSquares);
   
   for (var i = 0; i < squares.length; i++) {
         //change each color to mathc given color
        if(i < colors.length){
        	squares[i].style.display = "block"; 
        	squares[i].style.backgroundColor = colors[i]; 
        } else{        	
         squares[i].style.display = "none"; 
        }
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDsiplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
      for (var i = 0; i < colors.length; i++) {
         //change each color to mathc given color
         squares[i].style.backgroundColor = color; 
      }
	
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
   // make an array
   var arr = [];
   // add num random colors to array
   for(var i=0; i<num;i++){
   // get a random color and push it into array
   arr[i] = randomColor();
   }
   //return that array
   return arr;
}

function randomColor(){
  // pick "red" from 0-255
  var r = Math.floor(Math.random()*256);
  // pick "green" from 0-255
  var g = Math.floor(Math.random()*256);
  // pick "blue" from 0-255
  var b = Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")";
}
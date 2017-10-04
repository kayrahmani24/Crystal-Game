$(document).ready(function(){
	

 var wins = 0;

 var loses = 0;

 var targetScore = 0;

 var yourScore = 0;

 var flagRed = flagGreen = flagBlue = flagYellow = false;

 var red = green = blue = yellow = 0;

 targetScore = randomNumber(12,120);
 $("#targetScore").text(targetScore);


$("#red").on("click", function(){
	if(!flagRed){
	red = randomNumber(1,12);	
	flagRed = true;		
yourScore = yourScore + red;
$("#yourScore").text(yourScore)
}
yourScore = yourScore + red;
$("#yourScore").text(yourScore)
if(yourScore == targetScore){
	youWin();
	}
else if (yourScore > targetScore){
	youLose();
	}
});


$("#blue").on("click", function(){
	if(!flagBlue){
	blue = randomNumber(1,12);	
	flagBlue = true;		
yourScore = yourScore + blue;
$("#yourScore").text(yourScore)
}
yourScore = yourScore + blue;
$("#yourScore").text(yourScore)
if(yourScore == targetScore){
	youWin();
	}
else if (yourScore > targetScore){
	youLose();
	}
});

$("#green").on("click", function(){
	if(!flagGreen){
	green = randomNumber(1,12);	
	flagGreen = true;		
yourScore = yourScore + green;
$("#yourScore").text(yourScore)
}
yourScore = yourScore + green;
$("#yourScore").text(yourScore)
if(yourScore == targetScore){
	youWin();
	}
else if (yourScore > targetScore){
	youLose();
	}
});


$("#yellow").on("click", function(){
	if(!flagYellow){
	yellow = randomNumber(1,12);	
	flagYellow = true;		
yourScore = yourScore + yellow;
$("#yourScore").text(yourScore)
}
yourScore = yourScore + yellow;
$("#yourScore").text(yourScore)
if(yourScore == targetScore){
	youWin();
	}
else if (yourScore > targetScore){
	youLose();
	}
});







function randomNumber(max,min){
	var temp = Math.floor(Math.random() * (max - min) + min) ;
	return temp;
}


function youWin(){

	
	$("#win").text(wins++ + 1) ;
	alert("You Win");
	reset();

}
function youLose(){
	
	$("#lose").text(loses++ + 1);
	alert("You Lose!");
	reset();
 }

 function reset(){
 flagRed = flagGreen = flagBlue = flagBlue = false;

  red = green = blue = yellow = 0;

  yourScore = 0;

   targetScore = randomNumber(12,120);
 $("targetScore").text(targetScore);
 $("yourScore").text(yourScore);

 }
});

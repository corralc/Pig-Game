


var randDice, roundScore, playerTurn, prevDice, gameActive, winningPoint;
roundScore = 0;
playerTurn = 0;
var players = [];
gameActive = true;
winningPoint = 20;

function Player(playerNum, globalScore){
	this.playerNum = playerNum;
	this.globalScore = globalScore;
}


players[0] = new Player(1, 0);
players[1] = new Player(2, 0);





document.querySelector(".btn-roll").addEventListener("click", function(){
	if(gameActive === true){

	document.querySelector(".dice").classList.remove("dice-visibility");

	randDice = Math.floor(Math.random() * 6) + 1;

	if(randDice === 1){
		nextPlayer();
	}
	else{
	
		document.querySelector(".dice").src = "images/dice-" + randDice +".png";
	
		roundScore += randDice;

		document.querySelector(".current-" + (playerTurn + 1) + " p").textContent = roundScore;

	}

}


});



document.querySelector(".btn-hold").addEventListener("click", function(){
	
	if(randDice > 0 && roundScore > 0){	

	players[playerTurn].globalScore += roundScore;
	document.querySelector(".player-container" + (playerTurn + 1) + " p").textContent = players[playerTurn].globalScore;
	checkifWon(players[playerTurn]);
	nextPlayer();


	}


});


document.querySelector(".btn-new").addEventListener("click", function(){

	gameActive = true;
	roundScore = 0;

	for(var i = 0; i < players.length; i++ ){
		players[i].globalScore = 0;
	}
	document.querySelector(".player-container1 h2").classList.remove("current-player");
	document.querySelector(".player-container2 h2").classList.remove("current-player");

	document.querySelector(".player-container1 h2").classList.add("current-player");

	document.querySelector(".player-container" + players[playerTurn].playerNum + " h2").textContent = "PLAYER " + players[playerTurn].playerNum;

	document.querySelector(".current-1 p").textContent = 0;
	document.querySelector(".current-2 p").textContent = 0;

	document.querySelector(".player-container1 p").textContent = 0;
	document.querySelector(".player-container2 p").textContent = 0;

	document.querySelector(".dice").classList.add("dice-visibility");

	playerTurn = 0;


});



function nextPlayer(){

	document.querySelector(".dice").classList.add("dice-visibility");
	roundScore = 0;

	

	if(playerTurn === 0){
	playerTurn = 1;
	document.querySelector(".current-1 p").textContent = 0;
	

	document.querySelector(".player-container1 h2").classList.toggle("current-player");
	document.querySelector(".player-container2 h2").classList.toggle("current-player");
	}
	else {

	playerTurn = 0;
	document.querySelector(".current-2 p").textContent = 0;
	// document.querySelector(".current-" + notPlayer.playerNum + " p").textContent = roundScore;

	document.querySelector(".player-container1 h2").classList.toggle("current-player");
	document.querySelector(".player-container2 h2").classList.toggle("current-player");

		
	}

}

function checkifWon(playerObj){
	if(playerObj.globalScore >= winningPoint){
		gameActive = false;
		document.querySelector(".player-container" + playerObj.playerNum + " h2").textContent = "WINNER!!";

		nextPlayer();
		
		


	}

}
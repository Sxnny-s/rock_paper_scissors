var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;

// player throws .......

function playerThrowsLizard() {
	playersWeapon = "lizard"
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,playersWeapon);
}

function playerThrowsSpock() {
	playersWeapon = "spock"
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,playersWeapon);
}

function playerThrowsRock(){
	playersWeapon = "rock"
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,playersWeapon);
}

function playerThrowsScissors(){
	playersWeapon = "scissors"
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,playersWeapon);


}

function playerThrowsPaper(){
	playersWeapon = "paper"
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,playersWeapon);

}


// RNG weapon

function getRandomWeapon(){
	var randomNumber=Math.random();

	if(randomNumber<.20){
		botsWeapon="scissors";
	}
	else if(randomNumber<.40){
		botsWeapon="paper";
	}else if (randomNumber<.60){
		botsWeapon='rock'
	}else if (randomNumber<.80){
		botsWeapon="lizard"
	}else{
		botsWeapon='spock'
	}
	return botsWeapon;
}


// win conditions

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
		document.getElementById("status").style.color = 'orange'
	}
	else if(
		(botsWeapon=="rock" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="spock") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="Rock") 
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}


// update scores

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser :(");
	document.getElementById("status").style.color = 'red'
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("YOU WIN!!!");
	document.getElementById("status").style.color = '#17c064'
}



// Results

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
} 
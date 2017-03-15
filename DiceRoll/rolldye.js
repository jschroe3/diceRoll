var players = 5;
var playerTurn = 1;
var winningScore = 700;
var round = 1;


function rollDice(){
    var score = 0;

    var die1 = Math.floor(Math.random()*4 + 1);
    var die2 = Math.floor(Math.random()*6 + 1);
    var die3 = Math.floor(Math.random()*8 + 1);
    var die4 = Math.floor(Math.random()*10 + 1);
    var die5 = Math.floor(Math.random()*12 + 1);
    var die6 = Math.floor(Math.random()*20 + 1);

    score = die1 + die2 + die3 + die4 + die5 + die6;
    return score;
}


function playRound(){
    document.write('<br></br><b>Round #'+round+"<br></b><br></br>");
    for(i = 1; i<= players; i++){
        var scoreRolled = rollDice();

        playerScore[i] += scoreRolled;

        document.write("<b>Player "+i+"</b> rolled "+scoreRolled+" for a total score of "+playerScore[i]+"<br />");
    }

    round++;
}

function checkWinner(){

    var winnersArray = [];
    for(i=1;i <= players;i++){
        if(playerScore[i] >= winningScore){

        winnersArray.push(i);
        }
    }
    return winnersArray;
}


var playerScore = [];
var i;
for(i = 1;i <= players;i++){
    playerScore[i] = 0;
}

playRound();
var winner = checkWinner()
;while (winner.length === 0){
    playRound();
    winner = checkWinner();
}
numberOfWinners = winner.length;
if(winner.length === 1){
    window.alert("Player "+winner[0]+" wins! Here's the Breakdown.");
}
if(winner.length > 1){
    window.alert(""+numberOfWinners+"-way Tie.");
}

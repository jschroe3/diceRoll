var players = 5;
var playerTurn = 1;
var winningScore = 100;
var round = 1;


function rollDice(){
    var score = 0;

    var die1 = Math.floor(Math.random()*4 + 1);
    var die2 = Math.floor(Math.random()*6 + 1);
    
    score = die1 + die2;
    return score;
}


function playRound(){
    document.write("Round #"+round+"")
    for(i = 1; i<= players; i++){
        var scoreRolled = rollDice();
        //add score from roll to players overall score
        playerScore[i] += scoreRolled;
        //print results for player round
        document.write("Player "+i+" rolled "+scoreRolled+" for a total score of "+playerScore[i]+"");
    }
    //this is used to increase my round number by 1 
    round++;
}

function checkWinner(){
    //initialize winners array
    var winnersArray = [];
    for(i=1;i <= players;i++){
        if(playerScore[i] >= winningScore){
        //add winning player to my array
        winnersArray.push(i);
        }
    }
    return winnersArray; 
}

//initialize player score array
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
    document.write("Player"+winner[0]+"wins!");
}
if(winner.length > 1){
    document.write(""+numberOfWinners+"-way Tie.");
}

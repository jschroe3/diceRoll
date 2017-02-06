

function totalScore(){
var die1 = Math.floor(Math.random()*4 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var die3 = Math.floor(Math.random()*8 + 1);
var die4 = Math.floor(Math.random()*10 + 1);
var die5 = Math.floor(Math.random()*12 + 1);
var die6 = Math.floor(Math.random()*20 + 1);
var playerOneScore = die1+die2+die3+die4+die5+die6

console.log("You rolled a "+die1+" , "+die2+" , "+die3+" , "+die4+" , "+die5+" and "+die6+" for a total of "+playerOneScore+"");


document.write("You rolled a "+die1+" , "+die2+" , "+die3+" , "+die4+" , "+die5+" and "+die6+" for a total of "+playerOneScore+"");

var opponenantScore = 0;
var die7 = Math.floor(Math.random()*4 + 1);
var die8 = Math.floor(Math.random()*6 + 1);
var die9 = Math.floor(Math.random()*8 + 1);
var die10 = Math.floor(Math.random()*10 + 1);
var die11 = Math.floor(Math.random()*12 + 1);
var die12 = Math.floor(Math.random()*20 + 1);
opponenantScore == (die7+die8+die9+die10+die11+die12)

console.log("Your opponenant rolled a "+die7+" , "+die8+" , "+die9+" , "+die10+" , "+die11+" and "+die12+" for a total of "+opponenantScore+"");
document.write("Your opponenant rolled a "+die7+" , "+die8+" , "+die9+" , "+die10+" , "+die11+" and "+die12+" for a total of "+opponenantScore+"");
}
totalScore();

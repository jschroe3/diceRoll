window.onload=function(){
Nifty("div.playerArea", "big");
}

function roll()
{
  var result = 0;
  result = Math.floor((Math.random() * 6) + 1);
  return result;
}


function play()
{
  // create dice array
  var humanDice = new Array();
  var computerDice = new Array();
  
  // totals
  var humanTotal = 0;
  var computerTotal = 0;
  
  // output
  var out = "";
  
  // roll the dice
  for (var i = 0; i < 6; i++)
  {
    humanDice[i] = roll();
    humanTotal += humanDice[i];
    
    computerDice[i] = roll();
    computerTotal += computerDice[i];
  }
  
  // display human dice
  out = displayDice(humanDice);
  document.getElementById('humanDice').innerHTML = out;
  
  // display computer dice
  out = displayDice(computerDice);
  document.getElementById('computerDice').innerHTML = out;
  
  document.getElementById('humanTotal').innerHTML = humanTotal;
  document.getElementById('computerTotal').innerHTML =  computerTotal;  
  
  if (humanTotal > computerTotal)
  {
    document.getElementById('humanTotal').className = 'total winner';
    document.getElementById('computerTotal').className = 'total loser';
  }
  else if (computerTotal > humanTotal)
  {
    document.getElementById('humanTotal').className = 'total loser';
    document.getElementById('computerTotal').className = 'total winner';
  }
  else
  {
    document.getElementById('humanTotal').className = 'total';
    document.getElementById('computerTotal').className = 'total';
  }

}

function displayDice(dice)
{
  var out = "";
  for (var i = 0; i < dice.length; i++)
  {
    out += "<img src='die" + dice[i] + ".png'/>";
  }
  
  
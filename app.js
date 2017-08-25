var scores,roundscore, activeplayer, dice, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function(){

  if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;

    var diceselection = document.querySelector(".dice");
    diceselection.style.display="block";
    diceselection.src = "dice-"+dice+".png";

    if(dice >1){
      roundscore+=dice;
      document.querySelector("#current-"+activeplayer).textContent=roundscore;
    }else {
      nextplayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function(){

  if(gamePlaying){
    scores[activeplayer]+=roundscore;

    document.querySelector("#score-"+ activeplayer).textContent = scores[activeplayer];

    if (scores[activeplayer]>=30) {
      document.querySelector("#name-"+ activeplayer).textContent="Winner!!";
      document.querySelector(".dice").style.display="none";
      document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
      document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");
      gamePlaying = false;
    }else {
      nextplayer();

    }
  }
});

function nextplayer(){
  activeplayer===0 ? activeplayer=1: activeplayer=0;
  roundscore=0;

  document.getElementById("current-0").textContent="0";
  document.getElementById("current-1").textContent="0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display="none";
}


document.querySelector(".btn-new").addEventListener("click", init);


function init() {
  scores=[0, 0];
  activeplayer=0;
  roundscore=0;
  gamePlaying=true;

  document.querySelector(".dice").style.display="none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent="Player 1";
  document.getElementById("name-1").textContent="Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

var database
var canvas 
var gamestate = 0
var playercount 
var form
var game
var player, allplayers;



function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);

  game = new Game();
  game.getState();
  game.gamestart();
}

function draw(){
 if(playercount ===4){
   game.update(1);

 }
  if(gamestate ===1){
    clear();
    game.play();
  }
  
}
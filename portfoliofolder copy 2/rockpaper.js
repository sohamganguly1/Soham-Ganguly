let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(1000, 300);
  drawButtons();
}

function draw() {
  //just keep running 
  textSize(12);
  text('Add a point when you win, and Subtract when you loose with the buttons!', 0,190);
  textSize(15);
  text('Score: '+score, 120,230);

}

function rock() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose rock', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'rock'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}

function paper() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose paper', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'paper'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You lose:(", 100,350);
  } else {
    text("You win! ", 100,350);
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose scissors', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'scissors'){
    text("It's a tie",100,350);
  } else if (computerguess == 'rock'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}


function addPoints(){
  background(220);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(220);
  if(score>= 0)
    score-=1;
}

function drawButtons() {
  background(220);
  
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(200,200);
  buttonadd.mousePressed(addPoints);
  
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(200,230);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(150, 50);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(150, 100);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(150, 150);
  buttonscissors.mousePressed(scissors);

  text("Rock, paper, scissors!", 20, 20);
}
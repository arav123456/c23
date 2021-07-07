const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase,playerBase,Player1,Player2;

function preload(){
 
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerbase =new ComputerBase(width-300,random(450,height-300),180,150);
  playerBase=new Playerbase(300,random(450,height-300),180,150);

  //create player object
  Player1=new player(285,playerBase.body.position.y-153,50,180)
  Player2=new player(width-300,computerbase.body.position.y-160,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerBase.display();

   //display Player and computerplayer
   Player1.display();
   Player2.display();


}

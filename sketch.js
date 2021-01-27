
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
//var boyImage;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var rope;

function preload(){
	boy=loadImage("boy.png");
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(900, 500);

	

	

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
	
	ground = new Ground(450,500,900,10);
	stone=new Stone(90,400,50);
	mango1 = new Mango(650,110,70);
	mango2 = new Mango(720,90,70);
	mango3 = new Mango(770,130,70);
	mango4 = new Mango(700,170,70);
	mango5 = new Mango(600,190,70);
	mango6 = new Mango(830,180,70);
   //tree=new Tree(700,265,400,480);

	rope=new Rope(stone.body,{x:90,y:380});

	World.add(world,boy);
}


function draw() {
	
	background("yellow");

	imageMode(CENTER);
	image(boy,170,440,250,250);
	image(tree,700,265,400,480);

	

	ground.display();
	stone.display();
	//tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	rope.display();
	

	
	
	detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  

  drawSprites();
  

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:90, y:360}) 
	  rope.attach(stone.body);
	}
  }


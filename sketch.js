
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload() {
}

function setup() {
	createCanvas(1950, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	tree = new Tree(1000, 600);
	ground = new Ground(1000, 600, 2000, 10);
	boy = new Boy(150, 450, 100, 300);
	stone = new Stone(100, 200, 40, 40);
	chain = new Chain(stone.body, { x: 115, y: 530 });
	banana = new Banana(1000, 400, 50, 50);
	banana2 = new Banana(1000, 300, 50, 50);
	banana3 = new Banana(1000, 200, 50, 50);
	banana4 = new Banana(1100, 300, 50, 50);
	banana5 = new Banana(900, 300, 50, 50);

}


function draw() {
	rectMode(CENTER);
	background("");

	drawSprites();

	tree.display();
	ground.display();
	boy.display();
	stone.display();
	chain.display();
	banana.display();
	banana2.display();
	banana3.display();
	banana4.display();
	banana5.display();

	detectCollison(stone, banana);
	detectCollison(stone, banana2);
	detectCollison(stone, banana3);
	detectCollison(stone, banana4);
	detectCollison(stone, banana5);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	chain.fly();
}

function detectCollison(lstone, lbanana) {
	bananaBodyPosition = lbanana.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, bananaBodyPosition.x, bananaBodyPosition.y)
	if (distance <=lbanana.r+lstone.r) {
		Matter.Body.setStatic(lbanana.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x: 115, y: 530});
		chain.attach(stone.body);
	}
}
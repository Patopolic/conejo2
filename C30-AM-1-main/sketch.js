const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit, rope;
var fruit_con;
function preload() 
{ bg_img = loadImage('background.png');
 food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png'); 
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200, displayHeight, displayWidth+1100, 20);
bunny=createSprite(200,620,100,100);
bunny.addImage(rabbit)
bunny.scale=0.25;
  rope = new Rope(7, { x: 245, y: 30 });
  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body, fruit);

  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

}

function draw() {
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);
  imageMode(CENTER)

  image(food,fruit.position.x,fruit.position.y,70,70)
  rope.show();
  Engine.update(engine);
  ground.show();

drawSprites();

}

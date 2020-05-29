const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3,ground,paper1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Dustbin(700,320,20,70,"green");
    box2 = new Dustbin(920,320,20,70,"green");
   

    box3 = new Dustbin(810,360,220,20,"green");
    paper1 = new Paper(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
        box1.display();
    box2.display();
        box3.display();
        paper1.display();
    ground.display();
}
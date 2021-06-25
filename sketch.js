const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    b1 = new box(800,500,120,160);
    boll = new ball(100,500,10,10);
    g= new ground(500,590,1000,20);
}
function draw(){
    background(220);
    Engine.update(engine);
    b1.display();
    g.display();
    boll.display();
    if(keyDown("SPACE")){
        Matter.Body.applyForce(boll.body, boll.body.position, {x:15 , y:-15});
}
}
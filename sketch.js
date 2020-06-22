const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint= Matter.Constraint;
var engine, world;
var Slingshot,polygon1,polyimg;
var polygon1;



function setup() {
var canvas= createCanvas(800,400);
engine = Engine.create();
world = engine.world;

////polygon1 = Bodies.rectangle(100,100,100,100);
//World.add(world,polygon1);


ground1=new Ground(400,300,200,5);
box1=new box(380,290,20,20);
box2=new box(400,290,20,20);
box3=new box(360,290,20,20);
box4=new box(340,290,20,20);  
box5=new box(320,290,20,20);  
box6=new box(420,290,20,20);  
box7=new box(440,290,20,20);  
box8=new box(460,290,20,20);  
box9=new box(480,290,20,20);  
box10=new box(460,270,20,20);  
box11=new box(440,270,20,20);
box12=new box(420,270,20,20);  
box13=new box(400,270,20,20);  
box14=new box(380,270,20,20);  
box15=new box(360,270,20,20); 
box16=new box(340,270,20,20); 
box17=new box(440,250,20,20); 
box18=new box(420,250,20,20); 
box19=new box(400,250,20,20); 
box20=new box(380,250,20,20); 
box21=new box(360,250,20,20); 
box22=new box(420,230,20,20); 
box23=new box(400,230,20,20); 
box24=new box(380,230,20,20); 
box25=new box(400,210,20,20); 
ground2 = new Ground(400,380,800,20);
polygon1 = new polygon(100,200,50,50)



Slingshot=new slingshot(polygon1.body,{x:200,y:100})
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
 box22.display();
 box23.display();
 box24.display();
  box25.display();
 // polygon1.display();
ground2.display();
  ground1.display();
 
  Slingshot.display();
  polygon1.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}
function keyPressed(){
  if(keyDown("space")){
    mouseDragged();
    mouseReleased();
  }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function setup() {
  createCanvas(900,400);
 
  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new BlueBox(520,360,20,30);
  box3 = new BlueBox(540,360,20,30);
  box4 = new BlueBox(560,360,20,30);
  box5 = new BlueBox(580,360,20,30);
  box6 = new BlueBox(600,360,20,30);

  box7 = new VioletBox(510,330,20,30);
  box8 = new VioletBox(530,330,20,30);
  box9 = new VioletBox(550,330,20,30);
  box10 = new VioletBox(570,330,20,30);
  box11 = new VioletBox(590,330,20,30);

  box12 = new SkyBlueBox(520,310,20,30);
  box13 = new SkyBlueBox(540,310,20,30);
  box14 = new SkyBlueBox(560,310,20,30);
  box15 = new SkyBlueBox(580,310,20,30);

  box16 = new PinkBox(530,280,20,30);
  box17 = new PinkBox(550,280,20,30);
  box18 = new PinkBox(570,280,20,30);

  box19 = new BlueBox(540,250,20,30);
  box20 = new BlueBox(560,250,20,30);

  box21= new VioletBox(550,220,20,30);

  
  box22 = new SkyBlueBox(550,125,20,30);
  box23 = new SkyBlueBox(570,125,20,30);
  box24 = new SkyBlueBox(590,125,20,30);
  box25 = new SkyBlueBox(610,125,20,30);
  box26 = new SkyBlueBox(630,125,20,30);
  box27 = new SkyBlueBox(650,125,20,30);

  box28 = new PinkBox(560,95,20,30);
  box29 = new PinkBox(580,95,20,30);
  box30 = new PinkBox(600,95,20,30);
  box31 = new PinkBox(620,95,20,30);
  box32 = new PinkBox(640,95,20,30);

  ball = new Ball(0,0,50);

  spring = new Shooter(ball.body,{x:120,y:270});

  ground = new Platform(450,390,900,20);

  platform_hovering = new Platform(600,150,200,20);
  
  
}

function draw() {
  background(0);

  Engine.update(engine); 
   
  ground.display();
  platform_hovering.display();

  debug:true;


  textSize(35);
  fill("pink");
  text("Drag the Mouse to pull the ball and release it to throw the ball and knock the boxes!" , 02 , 50);
  text("Press the space key to reload the Shooter!" , 03 , 90);


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
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  ball.display();

  spring.display();
  
} 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  spring.release();
}
function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }
}
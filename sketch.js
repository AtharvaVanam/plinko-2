const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particle = [];
var particles;
var plinkos = [];
var division = [];
var turn = 0;
var divisionHeight=300;
var score =0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

if(particles!=null){
  particles.display();
  if(particles.body.position,y>760){
  if(particles.body.position<300){
    score = score+500;
    particles = null;
    if(turn>=5){gameState = "end"}
  }
  }
}
 
  for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
    score++;
    turn++;
    particles = new Particle(mouseX,10,10,10);
  }
}
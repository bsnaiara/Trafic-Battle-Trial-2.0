var car1, car2, car1IMG, car2IMG;
var obstacle1, obstacle2, obstacle3;
var background, backgroundIMG;
var distance=0;

function preload(){
car1IMG = loadAnimation("Car1.gif");
car2IMG = loadAnimation("Car2.gif");
backgroundIMG = loadImage("Road.png");

}

function setup() {
  createCanvas(1200, 300);

  background=createSprite(100,150);
  background.addImage(backgroundIMG);
  background.velocityX = -5;

  car1 = createSprite(50,250);
  car1.addAnimation("car1", car1IMG);
  car1.scale = 0.3;

  car2 = createSprite(50,50);
  car2.addAnimation("car2", car2IMG);
  car2.scale = 0.3;

  car1.debug = true;

  
}

function draw() {

  //Movimentar os carros
    MoveCar1();
    MoveCar2();

  //Programando a distância
   Distance();

  //Limites para os carros
  Border();

   //Movimento do plano de fundo
  if(background.x < 0 ){
    background.x = width/2;
  }
    drawSprites();
}

function MoveCar1(){
  if(keyDown("RIGHT_ARROW")){
    car1.x += 10;
  }
  if(keyDown("UP_ARROW")){
    car1.y -= 3;
  }
 if(keyDown("DOWN_ARROW")){
    car1.y += 3;
  }
  if(keyDown("LEFT_ARROW")){
    car1.x -= 3;
  }
}

function MoveCar2(){
  
  if(keyDown("D")){
    car2.x += 10;
  }
  if(keyDown("W")){
    car2.y -= 3;
  }
 if(keyDown("S")){
    car2.y += 3;
  }
  if(keyDown("A")){
    car2.x -= 3;
  }
}

function Border(){
  
  //Limite carro 1
  if(car1.x > 1000){
    car1.x = 1000;
  }
  if(car1.x < 100){
    car1.x = 100;
  }
  console.log(car1.y);
  if(car1.y < 5){
    car1.y = 5;
  }
  if(car1.y > 280){
    car1.y = 280;
  }

//Limite carro 2

if(car2.x > 1000){
  car2.x = 1000;
}
if(car2.x < 0){
  car2.x = 0;
}
if(car2.y > 300){
  car2.y = 300;
}
if(car2.y < 0){
  car2.y = 0;
}
} 

function Distance(){
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  distance = distance + Math.round(getFrameRate()/50);
  background.velocityX = -(6 + 2*distance/150);
}
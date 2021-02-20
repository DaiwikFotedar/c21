var obj1,obj2,obj3,ob4;
function setup() {

  createCanvas(800,400);
 
  obj1=createSprite(200, 100, 50, 50);
  obj2=createSprite(200, 200, 50, 50);
  obj3=createSprite(200, 300, 50, 50);
obj4=createSprite(100,200,50,50);
obj1.shapeColor="green";
obj2.shapeColor="green";
obj3.shapeColor="green";
obj4.shapeColor="green";


}

function draw() {

  background(255,255,255); 
  obj4.x=World.mouseX;
  obj4.y=World.mouseY;
  
  if (isTouching(obj1,obj4)){
    obj1.shapeColor="yellow";
    obj4.shapeColor="yellow";


  }
  else{
    obj1.shapeColor="green";
    obj4.shapeColor="green";
    
  }
  drawSprites();
}

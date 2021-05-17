

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
}

function draw() {
  background(255);  

  form = new Form()
  form.display();
  
  drawSprites();
}

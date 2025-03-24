let img;
const FG = '#111111';
const BG = '#f1f1f1';

function preload() {
  img = loadImage('armindrip.jpeg');
}

function setup() {
  createCanvas(1470, 980);
  background(BG);
  img.resize(1470, 980);
}

function draw() {
  background(BG);
  fill(FG);
  noStroke();
  
  const ratio = height/width;
  const tilesX = map(mouseX, 0, width, 50, 300);
  const tilesY = ratio * tilesX;
  const tileSize = width / tilesX;
  
  // Dot size factor based on mouseY
  const dotSizeFactor = map(mouseY, 0, height, 0.2, 1.5);
  
  for (let y = 0; y < img.height; y += tileSize) {
    for (let x = 0; x < img.width; x += tileSize) {
      const c = img.get(x, y);
      const b = map(brightness(c), 0, 255, 1, 0);
      
      push();
      translate(x, y);
      ellipse(tileSize/2, tileSize/2, b * tileSize * dotSizeFactor, b * tileSize * dotSizeFactor);
      pop();
    }
  }
}

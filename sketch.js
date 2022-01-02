var fireworks = [];
var gravity;
var fsound;
function preload() {
  fsound = loadSound("Fireworksound.mp3");
}

function setup() {
  createCanvas(1600, 720);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(8);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.02) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
function mouseClicked() {
  fireworks.push(new FireworkM());
}

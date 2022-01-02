function Particle(x, y, hu, firewor) {
  this.pos = createVector(x, y);
  this.firewor = firewor;
  this.lifespan = 255;
  this.hu = hu;
  if (this.firewor) {
    this.vel = createVector(0, random(-16, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 15));
  }
  this.acc = createVector(0, 0);
  this.applyForce = function (force) {
    this.acc.add(force);
  };
  this.update = function () {
    if (!this.firewor) {
      this.vel.mult(0.95);
      this.lifespan -= 5;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.done = function () {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    };
  };
  this.show = function () {
    colorMode(HSB);
    if (!this.firewor) {
      strokeWeight(4);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(8);
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
    if (mouseIsPressed === true) {
      point(mouseX, mouseY);
    }
  };
}
function ParticleM(x, y, hu, firewor) {
  this.pos = createVector(x, y);
  this.firewor = firewor;
  this.lifespan = 255;
  this.hu = hu;
  if (this.firewor) {
    this.vel = createVector(0, -16);
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 15));
  }
  this.acc = createVector(0, 0);
  this.applyForce = function (force) {
    this.acc.add(force);
  };
  this.update = function () {
    if (!this.firewor) {
      this.vel.mult(0.95);
      this.lifespan -= 5;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(-0.01);

    this.done = function () {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    };
  };
  this.show = function () {
    colorMode(HSB);
    if (!this.firewor) {
      strokeWeight(4);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(8);
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  };
}


class Rock {
  constructor(x, altitude, speed) {
    this.x = x;
    this.altitude = altitude;
    this.speed = speed;
  }

  update() {
    this.altitude -= this.speed;
    if(this.altitude <= 4) {
      this.altitude = 4;
    }
  }

  draw () {
    ellipse(this.x, height - this.altitude, 10);
    this.update();
  }
}

class ParaRock extends Rock {
  constructor(x, altitude, speed){
    super(x, altitude, speed);
  }
  draw () {
    ellipse(this.x, height - this.altitude - 10, 30);
    ellipse(this.x, height - this.altitude, 10);
    text('overload', this.x, height - this.altitude + 10)
    this.update();
  }
}

let myRock;
let leftRock;

function setup () {
  createCanvas(300, 300);
  myRock = new Rock(width / 2, height, 1);
  leftRock = new ParaRock(100, height, 0.9);
}

function draw () {
  background(200);
  myRock.draw();
  leftRock.draw();
}

var bullet;
var wall, thickness ;

var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapecolor = color(80, 80, 80);

}

function draw() {
  background(0, 0, 0);  

  if(Collided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10)
    {
      wall.shapecolor = color(255,0,0);

    }

    if (damage < 10)
    {
      wall.shapecolor = color(0,255,0);
    }
  }

  drawSprites();
}

function Collided(lbullet, lwall) {
  bulletrightedge = lbullet.x + lbullet.width;
  wallleftedge = lwall.x;
  if (bulletrightedge >= wallleftedge) {
    return true;
  }
  return false;
}
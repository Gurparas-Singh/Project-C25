class ball {
    constructor(x, y,width,height) {
      this.body = Bodies.circle(x, y, width,height, {isStatic:false, restitution: 0.6, friction: 0.5, density: 10});
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("red");
      image(this.image,pos.x, pos.y, this.width,this.heights);
    }
}
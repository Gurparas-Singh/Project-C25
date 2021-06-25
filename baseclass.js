class baseclass{
    constructor(x,y,width,height,angle){
            this.body = Bodies.rectangle(x,y,width,height,{restitution:0.8, friction: 1.0, density:1.0,isStatic:true});
            this.width = width;
            this.height = height;
            this.image = loadImage("dustbingreen.png");
            World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        fill ('white');
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
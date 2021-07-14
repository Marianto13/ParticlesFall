class BaseClass{
    constructor(x, y, radius,color) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        strokeWeight(2);
       // console.log(str(this.color));
        fill(""+str(this.color)+"");
        circle(0,0,this.radius);
       // imageMode(CENTER);
       // image(this.image, 0, 0, this.radius);
        pop();
      }
}
class Bob
{
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2

        }
        this.body   = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x= x;
        this.y =y;
      
          
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
       fill("green")
        circle(0,0, this.radius);
        pop();
    }
}
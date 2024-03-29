class Bob {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0.000,
          'density':0.8
      }
      this.body = Bodies.circle(x, y,40, options);
      this.r= 40;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);

      fill("blue");
      ellipse(0, 0, this.r,this.r);
      pop();
    }
  };
class Stone {
    constructor(x, y,width,height) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':12
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      
      pop();
    };
  };
  
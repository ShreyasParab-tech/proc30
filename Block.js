class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.01,
          
      }
      
      this.image = loadImage("block.png")
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      

      console.log(this.body.speed)
  if(this.body.speed<3){
    var pos= this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width, this.height);
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,30,40)
  }
  else {
    World.remove(world,this.body)
    push()
    this.Visibility=this.Visibility-6
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,30,40)
    pop();
  }
      
    }
}
class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
       
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
      
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed > 3){
          
         
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rect( this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
         else{
           this.Visiblity=this.Visibility;
         }

        
        
      }
}
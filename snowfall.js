class snw {

constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height);
this.image = loadImage("snow4.webp");
this.body.scale=0.5;
World.add(world,this.body);

}

display(){
var pos = this.body.position;
image(this.image,pos.x,pos.y,80,80);

}


}
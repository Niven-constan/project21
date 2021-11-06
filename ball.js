class Ball{
    constructor(x, y, w, h){
        var options = {
            isStatic: false
        }
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }
    show(){
        fill('green');
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height); 
    }
}
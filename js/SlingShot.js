class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);

        this.Sling1=loadImage("js/sling1.png");
        this.Sling2=loadImage("js/sling2.png");
        this.Sling3=loadImage("js/sling3.png");

        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        image(this.Sling1,100,281)
        image(this.Sling2,75,237)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
           // write stroke() to set the color to red
           stroke(48,22,8);
           // Write line() to draw a line from pointA to pointB
           line(pointA.x-70,pointA.y,pointB.x-40,pointB.y+24);
           line(pointA.x-70,pointA.y,pointB.x+1,pointB.y+20);
        }
    }
    
}